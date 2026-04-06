
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { book } from "./book.model";
import { BooksState } from "./books.reducer";

export const selectBooksState = createFeatureSelector<BooksState>('books');

export const selectBooks = createSelector(selectBooksState, (state): book[] => {
    console.log('selectBooks selector called, current books state:', state.books);
     return state.books;
});
  