import { selectBooks } from './books.selector';
import { Store } from '@ngrx/store';
import { BooklistService } from './booklist.service';
import { NgFor } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { book } from './book.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
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
    private Store: Store,
  ) {}
  /*
constructor(private booklistService: BooklistService,private router: Router, ) {}
 ngOninit for http call without storing the resonse in ngrx store
  ngOnInit(): void {
    this.booklistService
      .getBooks()
      .subscribe((book : book[]) => (this.booksList = book));
  }*/
  ngOnInit(): void {
    console.log('BookslistComponent initialized');
    this.Store.dispatch(BooksActions.loadBooks());
    this.subscription = this.Store.select(selectBooks).subscribe((books) => {
      console.log('BookslistComponent received books from store:==', books);
      this.loading = false;
      const booksListR = [
        {
          author: 'Harper Lee',
          cover_image: 'https://fakeimg.pl/667x1000/cc6600',
          description:
            'A classic novel depicting racial injustice in the American South.',
          genre: ['Fiction', 'Classic'],
          id: 1,
          publication_year: 1960,
          title: 'To Kill a Mockingbird',
        },
        {
          author: 'Harper Lee',
          cover_image: 'https://fakeimg.pl/667x1000/cc6600',
          description:
            'A classic novel depicting racial injustice in the American South.',
          genre: ['Fiction', 'Classic'],
          id: 3,
          publication_year: 1960,
          title: 'To Kill a Mockingbird',
        },
      ];
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
