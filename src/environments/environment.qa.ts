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
    backendUrl: 'http://localhost:8082',
    loginPath: '/saml/login',
    profilePath: '/saml/profile-data',
    logoutPath: '/saml/logout',
    appName: "userapp"
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
