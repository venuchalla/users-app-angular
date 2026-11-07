import { provideStoreDevtools } from '@ngrx/store-devtools';

export const environment = {
  production: false,
  oauth: {
    clientId: '',
    redirectUri: '',
    authorizationEndpoint: '',
    tokenEndpoint: '',
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
