import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  //provideRouter(routes),
  providers: [ provideStore(), provideEffects(), provideRouterStore()]
};
