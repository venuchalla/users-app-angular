import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { StoreModule, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { routes } from './app.routes';
import { AppRoutingModule } from './app-routing.module';
import { counterReducer } from './pages/counter/counter.reducer';
import { reducers } from './state';

export const appConfig: ApplicationConfig = {
  //provideRouter(routes),//provideStore()
  //provideEffects() provideRouterStore()
  providers: [provideStore(reducers)],
};
