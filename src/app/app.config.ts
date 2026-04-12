import { ApplicationConfig } from '@angular/core';
import { provideRouter, RouterState } from '@angular/router';
import { StoreModule, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { routes } from './app.routes';
import { AppRoutingModule } from './app-routing.module';
import { counterReducer } from './pages/counter/counter.reducer';
import { reducers } from './state';
import { BooksEffects } from './components/bookslist/books.effects';
import { provideHttpClient, withFetch} from '@angular/common/http';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  //provideRouter(routes),//provideStore()
   //provideRouterStore()
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(routes),
    provideStore(reducers),
    provideEffects([BooksEffects]),
    provideRouterStore(),
     provideClientHydration(withEventReplay()),
     environment.providers
  ],
};
