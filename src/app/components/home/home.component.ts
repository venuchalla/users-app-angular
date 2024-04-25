import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { BookslistComponent } from '../bookslist/bookslist.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,BookslistComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private titleService : Title){
    titleService.setTitle("Home")
  }
}
