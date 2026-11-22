export const environment = {
  production: true,
  authWidgetUrl: '',
  backendUrl: 'https://user-api-766984687989.us-central1.run.app',
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
    loginPath: '/saml/login',
    profilePath: '/saml/profile-data',
    logoutPath: '/saml/logout',
    appName: "github"
  },
  providers: [],
};
