import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter, RouterState } from '@angular/router';
import { StoreModule, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { routes } from './app.routes';
import { AppRoutingModule } from './app-routing.module';
import { counterReducer } from './pages/counter/counter.reducer';
import { reducers } from './state';
import { BooksEffects } from './components/bookslist/books.effects';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { environment } from '../environments/environment';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  //provideRouter(routes),//provideStore()
   //provideRouterStore()
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(routes),
    provideStore(reducers),
    // 2. Register the DevTools instrumentation right after
    provideStoreDevtools({
      maxAge: 25,                // Retains last 25 states
      logOnly: !isDevMode(),     // Restricts extension to log-only in production
      autoPause: true,           // Pauses recording actions when the extension window is not open
      trace: false,              // If set to true, will include stack trace for every dispatched action
      traceLimit: 75,            // Maximum stack trace frames to be stored
    }),
    provideEffects([BooksEffects]),
    provideRouterStore(),
    provideAnimations(),
    importProvidersFrom(MatDialogModule),
    provideClientHydration(withEventReplay()),
    environment.providers
  ],
};
