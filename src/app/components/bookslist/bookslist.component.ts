import { selectBooks } from './books.selector';
import { Store } from '@ngrx/store';
import { BooklistService } from './booklist.service';
import { NgFor } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { book } from './book.model';
import { HttpClient } from '@angular/common/http';
import { Router, RouterState } from '@angular/router';
import { BooksActions } from './books.actions';
import { Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-bookslist',
  standalone: true,
  //imports: [NgFor],
  providers: [HttpClient],
  templateUrl: './bookslist.component.html',
  styleUrl: './bookslist.component.scss',
})
export class BookslistComponent implements OnInit, OnDestroy {
  booksList: book[] = [];
  subscription!: Subscription;
  loading = true;
  constructor(
    private router: Router,
    private Store: Store
  ) {
      console.log('BookslistComponent constructor called' )
      this.Store.subscribe((state) => {
        console.log('BookslistComponent current store state:', state);
      });
  }
  
  ngOnInit(): void {
    console.log('BookslistComponent initialized');
    this.Store.dispatch(BooksActions.loadBooks());
    this.subscription = this.Store.select(selectBooks).subscribe((books) => {
      console.log('BookslistComponent received books from store:==', books);
      this.loading = false;
      this.booksList = books;
    });
  }

  goToCourseApp() {
    this.router.navigate(['csscourseapp']);
  }
  gotoHome() {
    this.router.navigate(['home']);
  }
  ngOnDestroy(): void {
    console.log('BookslistComponent destroyed');
    this.subscription.unsubscribe();
  }
}
