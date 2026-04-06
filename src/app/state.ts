import { ActionReducerMap } from '@ngrx/store';
import { counterReducer, CounterState } from './pages/counter/counter.reducer';
import { User, userReducer } from './pages/user/state';
import { routerReducer } from '@ngrx/router-store';
import { booksReducer, BooksState } from './components/bookslist/books.reducer';

export interface RootState {
  counter: CounterState;
  user: User;
  router: any;
  books: BooksState;
}

export const reducers: ActionReducerMap<RootState> = {
  counter: counterReducer,
  user: userReducer,
  router: routerReducer,
  books: booksReducer,
};
