import assert from 'node:assert/strict';
import { test } from 'node:test';
import { validateUnsignedLogoutResponse } from './index.mjs';

const requestId = '_logout-request-123';
const issuer =
  'https://my-dev-authentication-server-dsealt.us1.zitadel.cloud/saml/v2/metadata';
const successStatus = 'urn:oasis:names:tc:SAML:2.0:status:Success';
const now = Date.now();

function encodeResponse({
  inResponseTo = requestId,
  responseIssuer = issuer,
  status = successStatus,
  issueInstant = new Date(now).toISOString(),
  destination = 'https://localhost:4200/saml/logout/callback',
  signature = '',
} = {}) {
  const xml =
    `<LogoutResponse xmlns="urn:oasis:names:tc:SAML:2.0:protocol" ` +
    `ID="_logout-response-123" InResponseTo="${inResponseTo}" Version="2.0" ` +
    `IssueInstant="${issueInstant}" Destination="${destination}">` +
    `<Issuer xmlns="urn:oasis:names:tc:SAML:2.0:assertion">${responseIssuer}</Issuer>` +
    `<Status><StatusCode Value="${status}"/></Status>${signature}</LogoutResponse>`;
  return Buffer.from(xml).toString('base64');
}

test('accepts a successful unsigned response correlated to the logout request', async () => {
  await validateUnsignedLogoutResponse(encodeResponse(), requestId, now);
});

test('rejects a response with an unrelated InResponseTo', async () => {
  await assert.rejects(
    validateUnsignedLogoutResponse(
      encodeResponse({ inResponseTo: '_different-request' }),
      requestId,
      now,
    ),
    /does not match the logout request/,
  );
});

test('rejects a response from an unexpected issuer or destination', async () => {
  await assert.rejects(
    validateUnsignedLogoutResponse(
      encodeResponse({ responseIssuer: 'https://attacker.example/metadata' }),
      requestId,
      now,
    ),
    /issuer did not match Zitadel/,
  );
  await assert.rejects(
    validateUnsignedLogoutResponse(
      encodeResponse({ destination: 'https://attacker.example/callback' }),
      requestId,
      now,
    ),
    /destination did not match this service/,
  );
});

test('rejects failed, stale, or malformed responses and refuses to bypass signatures', async () => {
  await assert.rejects(
    validateUnsignedLogoutResponse(
      encodeResponse({
        status: 'urn:oasis:names:tc:SAML:2.0:status:RequestDenied',
      }),
      requestId,
      now,
    ),
    /successful SAML logout/,
  );
  await assert.rejects(
    validateUnsignedLogoutResponse(
      encodeResponse({ issueInstant: new Date(now - 10 * 60_000).toISOString() }),
      requestId,
      now,
    ),
    /IssueInstant/,
  );
  await assert.rejects(
    validateUnsignedLogoutResponse(
      encodeResponse({
        signature: '<Signature xmlns="http://www.w3.org/2000/09/xmldsig#"/>',
      }),
      requestId,
      now,
    ),
    /Refusing to bypass validation of a signed LogoutResponse/,
  );
  await assert.rejects(
    validateUnsignedLogoutResponse('not-base64', requestId, now),
    /base64/,
  );
});
