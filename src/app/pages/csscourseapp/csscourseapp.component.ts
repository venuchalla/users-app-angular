import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-csscourseapp',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './csscourseapp.component.html',
  styleUrl: './csscourseapp.component.scss',
})
export class CsscourseappComponent {
  constructor(private router: Router) {}
  natours() {
    this.router.navigate(['csscourseapp', 'natours']);
  }
  nexter() {
    this.router.navigate(['csscourseapp', 'nexter']);
  }
  trillo(){
    this.router.navigate(['csscourseapp', 'trillo'])
  }
}
