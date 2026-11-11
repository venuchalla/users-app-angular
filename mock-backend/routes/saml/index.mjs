import { SAML } from '@node-saml/node-saml';
import express from 'express';
import { randomBytes, timingSafeEqual } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import {
  parseDomFromString,
  parseXml2JsFromString,
  signXml,
  xpath,
} from '@node-saml/node-saml/lib/xml.js';

const router = express.Router();
const zitadelSsoUrl =
  'https://my-dev-authentication-server-dsealt.us1.zitadel.cloud/saml/v2/SSO';
const issuer = process.env.SAML_SP_ISSUER || 'http://localhost:4200';
const callbackUrl =
  process.env.SAML_SP_CALLBACK_URL ||
  'https://localhost:4200/saml/callback';
const logoutCallbackUrl =
  process.env.SAML_SP_LOGOUT_CALLBACK_URL ||
  'https://localhost:4200/saml/logout/callback';
const zitadelSloUrl =
  'https://my-dev-authentication-server-dsealt.us1.zitadel.cloud/saml/v2/SLO';
const zitadelIssuer =
  'https://my-dev-authentication-server-dsealt.us1.zitadel.cloud/saml/v2/metadata';
const localPrivateKeyPath = join(
  import.meta.dirname,
  '../../../.local/saml/sp-private-key.pem',
);
const idpCertificate = readFileSync(
  join(import.meta.dirname, '../../../src/assets/cert/idp.crt'),
  'utf8',
);
const privateKey =
  process.env.SAML_SP_PRIVATE_KEY?.replace(/\\n/g, '\n') ||
  (process.env.NODE_ENV !== 'production' && existsSync(localPrivateKeyPath)
    ? readFileSync(localPrivateKeyPath, 'utf8')
    : undefined);
const samlOptions = {
  entryPoint: zitadelSsoUrl,
  logoutUrl: zitadelSloUrl,
  issuer,
  callbackUrl,
  logoutCallbackUrl,
  idpCert: idpCertificate,
  idpIssuer: zitadelIssuer,
  privateKey,
  signatureAlgorithm: 'sha256',
  digestAlgorithm: 'sha256',
  audience: issuer,
  forceAuthn: true,
  wantAssertionsSigned: true,
  validateInResponseTo: 'always',
  rejectReplayedAssertions: true,
  acceptedClockSkewMs: 2 * 60 * 1000,
};
const saml = privateKey ? new SAML(samlOptions) : undefined;

const stateCookieName = 'saml_state';
const logoutStateCookieName = 'saml_logout_state';
const sessionCookieName = 'saml_session';
const stateTtlMs = 5 * 60 * 1000;
const resultTtlMs = 60 * 1000;
const sessionTtlMs = 8 * 60 * 60 * 1000;
const logoutIssueInstantSkewMs = 30 * 1000;
const pendingStates = new Map();
const pendingLogoutStates = new Map();
const pendingLogoutRequestIds = new Map();
const profileTickets = new Map();
const sessions = new Map();

function getCookie(req, name) {
  const cookie = req.headers.cookie
    ?.split(';')
    .map((item) => item.trim())
    .find((item) => item.startsWith(`${name}=`));
  return cookie?.slice(name.length + 1);
}

function statesMatch(expected, actual) {
  if (typeof expected !== 'string' || typeof actual !== 'string') {
    return false;
  }
  const expectedBuffer = Buffer.from(expected);
  const actualBuffer = Buffer.from(actual);
  return (
    expectedBuffer.length === actualBuffer.length &&
    timingSafeEqual(expectedBuffer, actualBuffer)
  );
}

function cleanExpiredEntries(map, now) {
  for (const [key, expiresAt] of map) {
    if (expiresAt <= now) {
      map.delete(key);
    }
  }
}

function validLogoutState(relayState, cookieState, now = Date.now()) {
  const expiresAt =
    typeof relayState === 'string'
      ? pendingLogoutStates.get(relayState)
      : undefined;
  return (
    Boolean(expiresAt) &&
    expiresAt > now &&
    statesMatch(relayState, cookieState)
  );
}

function redirectHomeAfterLogout(res, status = 'local') {
  res.redirect(303, `/home?logout=${status}`);
}

async function parseLogoutResponse(samlResponse) {
  if (
    typeof samlResponse !== 'string' ||
    samlResponse.length === 0 ||
    samlResponse.length > 1_400_000 ||
    !/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(
      samlResponse,
    )
  ) {
    throw new Error('Invalid base64 SAML LogoutResponse.');
  }

  const xmlBytes = Buffer.from(samlResponse, 'base64');
  if (xmlBytes.toString('base64') !== samlResponse) {
    throw new Error('Non-canonical base64 SAML LogoutResponse.');
  }
  const xml = new TextDecoder('utf-8', { fatal: true }).decode(xmlBytes);
  const document = await parseDomFromString(xml);
  const roots = xpath.selectElements(
    document,
    "/*[local-name()='LogoutResponse' and namespace-uri()='urn:oasis:names:tc:SAML:2.0:protocol']",
  );
  if (roots.length !== 1) {
    throw new Error('Expected one SAML 2.0 LogoutResponse root element.');
  }

  const signatures = xpath.selectElements(
    roots[0],
    ".//*[local-name()='Signature' and namespace-uri()='http://www.w3.org/2000/09/xmldsig#']",
  );
  const parsed = await parseXml2JsFromString(xml);
  const response = parsed.LogoutResponse;
  if (!response) {
    throw new Error('Unable to parse the SAML LogoutResponse.');
  }

  return { response, signed: signatures.length > 0 };
}

function validateLogoutResponseFields(
  response,
  expectedRequestId,
  now = Date.now(),
) {
  const attributes = response.$;
  const issuerValue = response.Issuer?.[0]?._?.trim();
  const status = response.Status?.[0];
  const statusCode = status?.StatusCode?.[0]?.$?.Value;
  const issueInstant = Date.parse(attributes?.IssueInstant);
  const responseAgeMs = now - issueInstant;

  if (
    attributes?.Version !== '2.0' ||
    typeof attributes.ID !== 'string' ||
    !attributes.ID ||
    attributes.InResponseTo !== expectedRequestId
  ) {
    throw new Error('SAML LogoutResponse does not match the logout request.');
  }
  if (issuerValue !== zitadelIssuer) {
    throw new Error('SAML LogoutResponse issuer did not match Zitadel.');
  }
  if (
    !Number.isFinite(issueInstant) ||
    responseAgeMs < -30_000 ||
    responseAgeMs > 5 * 60_000
  ) {
    throw new Error('SAML LogoutResponse IssueInstant is outside the allowed window.');
  }
  if (
    attributes.Destination &&
    attributes.Destination !== logoutCallbackUrl
  ) {
    throw new Error('SAML LogoutResponse destination did not match this service.');
  }
  if (statusCode !== 'urn:oasis:names:tc:SAML:2.0:status:Success') {
    const statusMessage = status?.StatusMessage?.[0]?._?.trim().slice(0, 300);
    throw new Error(
      `Zitadel did not report a successful SAML logout (status: ${statusCode ?? 'missing'}${statusMessage ? `; ${statusMessage}` : ''}).`,
    );
  }
}

export async function validateUnsignedLogoutResponse(
  samlResponse,
  expectedRequestId,
  now = Date.now(),
) {
  const { response, signed } = await parseLogoutResponse(samlResponse);
  if (signed) {
    throw new Error('Refusing to bypass validation of a signed LogoutResponse.');
  }
  validateLogoutResponseFields(response, expectedRequestId, now);
}

function cleanExpiredTickets(now) {
  for (const [ticket, result] of profileTickets) {
    if (result.expiresAt <= now) {
      profileTickets.delete(ticket);
    }
  }
}

function publicProfile(profile) {
  const attributes = {};

  for (const [name, value] of Object.entries(profile)) {
    if (
      ['issuer', 'nameID', 'nameIDFormat', 'sessionIndex', 'ID'].includes(name)
    ) {
      continue;
    }

    if (typeof value === 'string') {
      attributes[name] = value.slice(0, 1000);
    } else if (Array.isArray(value)) {
      const values = value
        .filter((item) => typeof item === 'string')
        .slice(0, 20)
        .map((item) => item.slice(0, 1000));
      if (values.length > 0) {
        attributes[name] = values;
      }
    }
  }

  return {
    issuer: profile.issuer,
    nameID: profile.nameID,
    nameIDFormat: profile.nameIDFormat,
    sessionIndex: profile.sessionIndex,
    attributes,
  };
}

router.get('/login', async (_req, res, next) => {
  if (!saml) {
    res
      .status(503)
      .type('text')
      .send('SAML sign-in is not configured on the server.');
    return;
  }

  try {
    const now = Date.now();
    cleanExpiredEntries(pendingStates, now);
    const relayState = randomBytes(32).toString('base64url');
    pendingStates.set(relayState, now + stateTtlMs);
    res.setHeader(
      'Set-Cookie',
      `${stateCookieName}=${relayState}; HttpOnly; Secure; SameSite=None; Path=/saml/callback; Max-Age=300`,
    );
    res.redirect(302, await saml.getAuthorizeUrlAsync(relayState, {}));
  } catch (error) {
    console.error('Unable to generate the SAML authentication request.', error);
    next(error);
  }
});

router.post(
  '/callback',
  express.urlencoded({ extended: false, limit: '1mb', parameterLimit: 10 }),
  async (req, res) => {
    const relayState = req.body?.RelayState;
    const cookieState = getCookie(req, stateCookieName);
    const stateExpiresAt =
      typeof relayState === 'string' ? pendingStates.get(relayState) : undefined;

    res.setHeader(
      'Set-Cookie',
      `${stateCookieName}=; HttpOnly; Secure; SameSite=None; Path=/saml/callback; Max-Age=0`,
    );

    if (
      !saml ||
      typeof req.body?.SAMLResponse !== 'string' ||
      !stateExpiresAt ||
      stateExpiresAt <= Date.now() ||
      !statesMatch(relayState, cookieState)
    ) {
      if (typeof relayState === 'string') {
        pendingStates.delete(relayState);
      }
      res.redirect(303, '/saml?error=saml_callback');
      return;
    }

    pendingStates.delete(relayState);

    try {
      const { profile, loggedOut } = await saml.validatePostResponseAsync({
        SAMLResponse: req.body.SAMLResponse,
      });

      if (!profile || loggedOut) {
        res.redirect(303, '/saml?error=saml_callback');
        return;
      }

      const now = Date.now();
      cleanExpiredTickets(now);
      const ticket = randomBytes(32).toString('base64url');
      profileTickets.set(ticket, {
        expiresAt: now + resultTtlMs,
        profile: publicProfile(profile),
        samlProfile: {
          issuer: profile.issuer,
          nameID: profile.nameID,
          nameIDFormat: profile.nameIDFormat,
          nameQualifier: profile.nameQualifier,
          spNameQualifier: profile.spNameQualifier,
          sessionIndex: profile.sessionIndex,
        },
      });
      if (profileTickets.size > 1000) {
        const oldestTicket = profileTickets.keys().next().value;
        if (oldestTicket) {
          profileTickets.delete(oldestTicket);
        }
      }

      const callbackOrigin = new URL(callbackUrl).origin;
      res.redirect(
        303,
        `${callbackOrigin}/saml/profile?ticket=${encodeURIComponent(ticket)}`,
      );
    } catch (error) {
      console.error('SAML response validation failed.', error);
      res.redirect(303, '/saml?error=saml_callback');
    }
  },
);

router.get('/profile-data', (req, res) => {
  const ticket = req.query.ticket;
  if (typeof ticket !== 'string' || !/^[A-Za-z0-9_-]{43}$/.test(ticket)) {
    res.sendStatus(400);
    return;
  }

  const result = profileTickets.get(ticket);
  profileTickets.delete(ticket);

  if (!result || result.expiresAt <= Date.now()) {
    res.status(410).json({ message: 'The sign-in result expired. Please sign in again.' });
    return;
  }

  const sessionId = randomBytes(32).toString('base64url');
  sessions.set(sessionId, {
    expiresAt: Date.now() + sessionTtlMs,
    profile: result.samlProfile,
  });
  res.setHeader(
    'Set-Cookie',
    `${sessionCookieName}=${sessionId}; HttpOnly; Secure; SameSite=Lax; Path=/saml; Max-Age=${sessionTtlMs / 1000}`,
  );
  res.setHeader('Cache-Control', 'no-store');
  res.json(result.profile);
});

router.get('/logout', async (req, res, next) => {
  const sessionId = getCookie(req, sessionCookieName);
  const session = sessionId ? sessions.get(sessionId) : undefined;

  res.setHeader(
    'Set-Cookie',
    `${sessionCookieName}=; HttpOnly; Secure; SameSite=Lax; Path=/saml; Max-Age=0`,
  );

  if (!saml || !sessionId || !session || session.expiresAt <= Date.now()) {
    if (sessionId) {
      sessions.delete(sessionId);
    }
    redirectHomeAfterLogout(res, 'complete');
    return;
  }

  sessions.delete(sessionId);

  try {
    cleanExpiredEntries(pendingLogoutStates, Date.now());
    for (const relayState of pendingLogoutRequestIds.keys()) {
      if (!pendingLogoutStates.has(relayState)) {
        pendingLogoutRequestIds.delete(relayState);
      }
    }
    const relayState = randomBytes(32).toString('base64url');
    pendingLogoutStates.set(relayState, Date.now() + stateTtlMs);
    res.append(
      'Set-Cookie',
      `${logoutStateCookieName}=${relayState}; HttpOnly; Secure; SameSite=None; Path=/saml/logout/callback; Max-Age=300`,
    );
    const requestXml = await saml._generateLogoutRequest(session.profile);
    const issueInstant = new Date(
      Date.now() - logoutIssueInstantSkewMs,
    ).toISOString();
    const timestampedRequestXml = requestXml.replace(
      /IssueInstant="[^"]+"/,
      `IssueInstant="${issueInstant}"`,
    );
    if (timestampedRequestXml === requestXml) {
      throw new Error('Generated SAML LogoutRequest is missing IssueInstant.');
    }
    const requestId = timestampedRequestXml.match(
      /<samlp:LogoutRequest\b[^>]*\bID="([^"]+)"/,
    )?.[1];
    if (!requestId) {
      throw new Error('Generated SAML LogoutRequest is missing its ID.');
    }
    const logoutRequestXPath =
      "/*[local-name(.)='LogoutRequest' and namespace-uri(.)='urn:oasis:names:tc:SAML:2.0:protocol']";
    const signedRequest = signXml(
      timestampedRequestXml,
      logoutRequestXPath,
      { reference: logoutRequestXPath, action: 'append' },
      saml.options,
    );
    pendingLogoutRequestIds.set(relayState, requestId);
    const samlRequest = Buffer.from(signedRequest, 'utf8').toString('base64');
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader(
      'Content-Security-Policy',
      `default-src 'none'; script-src 'unsafe-inline'; form-action ${zitadelSloUrl}; base-uri 'none'`,
    );
    res.type('html').send(
      `<!doctype html><html><head><meta charset="utf-8"><title>Signing out</title></head><body>` +
        `<form id="saml-logout" method="post" action="${zitadelSloUrl}">` +
        `<input type="hidden" name="SAMLRequest" value="${samlRequest}">` +
        `<input type="hidden" name="RelayState" value="${relayState}">` +
        `<button type="submit">Continue signing out</button></form>` +
        `<script>document.getElementById('saml-logout').submit()</script></body></html>`,
    );
  } catch (error) {
    console.error('Unable to generate the SAML logout request.', error);
    pendingLogoutStates.delete(relayState);
    pendingLogoutRequestIds.delete(relayState);
    res.append(
      'Set-Cookie',
      `${logoutStateCookieName}=; HttpOnly; Secure; SameSite=None; Path=/saml/logout/callback; Max-Age=0`,
    );
    redirectHomeAfterLogout(res);
  }
});

router.post(
  '/logout/callback',
  express.urlencoded({ extended: false, limit: '1mb', parameterLimit: 10 }),
  async (req, res) => {
    const relayState = req.body?.RelayState;
    const cookieState = getCookie(req, logoutStateCookieName);
    const response = req.body?.SAMLResponse;

    res.setHeader(
      'Set-Cookie',
      `${logoutStateCookieName}=; HttpOnly; Secure; SameSite=Lax; Path=/saml/logout/callback; Max-Age=0`,
    );

    if (
      !saml ||
      typeof response !== 'string' ||
      !validLogoutState(relayState, cookieState)
    ) {
      if (typeof relayState === 'string') {
        pendingLogoutStates.delete(relayState);
      }
      redirectHomeAfterLogout(res);
      return;
    }

    const expectedRequestId = pendingLogoutRequestIds.get(relayState);
    pendingLogoutStates.delete(relayState);
    pendingLogoutRequestIds.delete(relayState);
    if (!expectedRequestId) {
      redirectHomeAfterLogout(res);
      return;
    }

    try {
      const { response: parsedResponse, signed } =
        await parseLogoutResponse(response);
      validateLogoutResponseFields(parsedResponse, expectedRequestId);

      if (signed) {
        const result = await saml.validatePostResponseAsync({
          SAMLResponse: response,
        });
        if (!result.loggedOut) {
          throw new Error('Zitadel did not complete the SAML logout.');
        }
        res.redirect(303, '/home?logout=complete');
        return;
      }

      await validateUnsignedLogoutResponse(response, expectedRequestId);
      await saml.cacheProvider.removeAsync(expectedRequestId);
      console.warn(
        'Zitadel returned a correlated, unsigned LogoutResponse. Local logout is complete; Zitadel logout cannot be cryptographically verified.',
      );
      res.redirect(303, '/home?logout=unverified');
    } catch (error) {
      await saml.cacheProvider.removeAsync(expectedRequestId);
      console.error('SAML POST logout response validation failed.', error);
      redirectHomeAfterLogout(res);
    }
  },
);

router.get('/logout/callback', async (req, res) => {
  const cookieState = getCookie(req, logoutStateCookieName);
  const originalQuery = req.originalUrl.split('?')[1] ?? '';

  res.setHeader(
    'Set-Cookie',
    `${logoutStateCookieName}=; HttpOnly; Secure; SameSite=Lax; Path=/saml/logout/callback; Max-Age=0`,
  );

  if (!saml) {
    redirectHomeAfterLogout(res);
    return;
  }

  try {
    const result = await saml.validateRedirectAsync(originalQuery);
    pendingLogoutStates.delete(result.relayState);
    if (
      !result.loggedOut ||
      !validLogoutState(result.relayState, cookieState)
    ) {
      redirectHomeAfterLogout(res);
      return;
    }

    res.redirect(303, '/home?logout=complete');
  } catch (error) {
    console.error('SAML logout response validation failed.', error);
    redirectHomeAfterLogout(res);
  }
});

export default router;
