import { provideStoreDevtools } from '@ngrx/store-devtools';

export const environment = {
  production: false,
  oauth: {
    clientId: '388061232445373142',
    redirectUri: 'https://localhost:4200/oauth/callback',
    authorizationEndpoint:
      'https://my-dev-authentication-server-dsealt.us1.zitadel.cloud/oauth/v2/authorize',
    tokenEndpoint:
      'https://my-dev-authentication-server-dsealt.us1.zitadel.cloud/oauth/v2/token',
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
