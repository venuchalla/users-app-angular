export const environment = {
  production: true,
  authWidgetUrl: '',
  oauth: {
    clientId: '388061232445373142',
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
  providers: [],
};
