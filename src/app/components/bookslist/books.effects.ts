import { BooklistService } from './booklist.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { BooksActions } from "./books.actions";
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class BooksEffects {
  constructor(private actions$: Actions ,private BooklistService: BooklistService) {}
  /*loadBooks$ = createEffect(() => 
     this.actions$.pipe(
      ofType(BooksActions.loadBooks),
      mergeMap(() =>
        this.BooklistService.getBooks().pipe(
          map((books) => BooksActions.loadBooksSuccess({ books })),
          catchError((error) => of(BooksActions.loadBooksFailure({ error })))
        )
      )
    )
  );*/

  loadBooks$ = createEffect(() =>{
    //console.log('BooksEffects initialized, actions$ stream:', this.actions$);
    return this.actions$.pipe(
      ofType(BooksActions.loadBooks),
      mergeMap(() => {
        //console.log('BooksActions.loadBooks action received, calling BooklistService.getBooks()');
        return this.BooklistService.getBooks().pipe(
          map((books) => {
            console.log('BooklistService.getBooks() returned:', books);
            return BooksActions.loadBooksSuccess({ books });
          }),
          catchError((error) => {
            console.error('Error in BooklistService.getBooks():', error);
            return of(BooksActions.loadBooksFailure({ error }));
          })
        );
      })
    );  
  })

}