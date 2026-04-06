import { createReducer, on } from '@ngrx/store';
import { book } from './book.model';
import { BooksActions } from './books.actions';

export interface BooksState {
  books: book[];
}

export const initialState: BooksState = {
  books: [],
};

export const booksReducer = createReducer(
  initialState,
  on(BooksActions.loadBooks, (state) => {
    console.log(
      'BooksActions.loadBooks action dispatched, current state:',
      state,
    );
    return { ...state };
  }),
  on(BooksActions.loadBooksSuccess, (state, { books }) => {
    console.log(
      'BooksActions.loadBooksSuccess action dispatched, payload:',
      books,
    );
    console.log('Current state before update:', state);
    return { ...state, books };
  }),
  on(BooksActions.loadBooksFailure, (state, { error }) => {
    console.log(
      'BooksActions.loadBooksFailure action dispatched, payload:',
      error,
    );
    return { ...state };
  }),
);
