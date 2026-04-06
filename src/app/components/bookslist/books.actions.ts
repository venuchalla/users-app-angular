import { createAction, props } from "@ngrx/store";
import { book } from "./book.model";

const loadBooks = createAction('[Books List] Load Books');
const loadBooksSuccess = createAction('[Books List] Load Books Success', props<{ books: book[] }>());
const loadBooksFailure = createAction('[Books List] Load Books Failure', props<{ error: any }>());

export const BooksActions = {
  loadBooks,
  loadBooksSuccess,
  loadBooksFailure
};