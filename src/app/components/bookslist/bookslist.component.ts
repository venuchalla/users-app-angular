import { BooklistService } from './booklist.service';
import {  NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { books } from './books.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bookslist',
  standalone: true,
  imports: [NgFor],
  providers: [HttpClient],
  templateUrl: './bookslist.component.html',
  styleUrl: './bookslist.component.scss',
})
export class BookslistComponent implements OnInit {
  booksList: books[] = [];
  constructor(private booklistService: BooklistService) {}

  ngOnInit(): void {
    this.booklistService
      .getBooks()
      .subscribe((books) => (this.booksList = books));
  }
}
