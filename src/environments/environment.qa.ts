import { provideStoreDevtools } from '@ngrx/store-devtools';

export const environment = {
  production: false,
  authWidgetUrl: '',
  oauth: {
    clientId: '',
    redirectPath: 'oauth/callback',
    postLogoutRedirectPath: 'home',
    authorizationEndpoint: '',
    tokenEndpoint: '',
    userInfoEndpoint: '',
    revokeEndpoint: '',
    endSessionEndpoint: '',
  },
  saml: {
     endpoint: 'https://my-dev-authentication-server-dsealt.us1.zitadel.cloud/saml/v2/SSO',
    sloEndpoint: 'https://my-dev-authentication-server-dsealt.us1.zitadel.cloud/saml/v2/SLO',
    backendUrl: 'http://localhost:8082',
    loginPath: '/saml/login',
    profilePath: '/saml/profile-data',
    logoutPath: '/saml/logout',
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
