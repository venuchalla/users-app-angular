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
    endpoint: '',
    sloEndpoint: '',
    backendUrl: '',
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
