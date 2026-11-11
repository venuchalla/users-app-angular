import { provideStoreDevtools } from '@ngrx/store-devtools';

export const environment = {
  production: false,
  authWidgetUrl: 'http://localhost:3000/auth',
  oauth: {
    clientId: '388061232445373142',
    clientSecret: 'rwk9f8fTiTIgP03Ca9RzSHEaBuymsKg1RLyqPtfEt9PKFmt4ct11a7UzR0u31yvr',
    redirectPath: 'oauth/callback',
    postLogoutRedirectPath: 'home',
    authorizationEndpoint:
      'https://my-dev-authentication-server-dsealt.us1.zitadel.cloud/oauth/v2/authorize',
    tokenEndpoint:
      'https://my-dev-authentication-server-dsealt.us1.zitadel.cloud/oauth/v2/token',
    userInfoEndpoint:
      'https://my-dev-authentication-server-dsealt.us1.zitadel.cloud/oidc/v1/userinfo',
    revokeEndpoint:
      'https://my-dev-authentication-server-dsealt.us1.zitadel.cloud/oauth/v2/revoke',
    endSessionEndpoint:
      'https://my-dev-authentication-server-dsealt.us1.zitadel.cloud/oidc/v1/end_session',
  },
  saml: {
    endpoint: 'https://my-dev-authentication-server-dsealt.us1.zitadel.cloud/saml/v2/SSO',
    sloEndpoint: 'https://my-dev-authentication-server-dsealt.us1.zitadel.cloud/saml/v2/SLO',
  },
  providers: [
    provideStoreDevtools({
      maxAge: 25,
      logOnly: false,
      autoPause: true,
      features: {
        pause: false,
        lock: true,
        persist: true,
      },
    }),
  ],
};
