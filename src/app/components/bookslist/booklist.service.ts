import { Injectable } from '@angular/core';
import { books } from './books.model';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooklistService {
  constructor(private httpClient :HttpClient) {}

  //https://freetestapi.com/api/v1/books
  getBooks(){
    /*const booksList: books[] = [
      {
        id: 1,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        publication_year: 1960,
        genre: ['Fiction', 'Classic'],
        description:
          'A classic novel depicting racial injustice in the American South.',
        cover_image: 'https://fakeimg.pl/667x1000/cc6600'
      },
    ];*/
    return this.httpClient.get<books[]>('https://freetestapi.com/api/v1/books').pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<books[]>('getHeroes', []))
    )
    
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message)
  }
}
