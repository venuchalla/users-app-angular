import { RootState } from '@app/state';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-csscourseapp',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './csscourseapp.component.html',
  styleUrl: './csscourseapp.component.scss',
})
export class CsscourseappComponent {
  constructor(
    private router: Router,
    private Store: Store<RootState>,
  ) {
    
  }
  ngOnInit() {
   //console.log('CsscourseappComponent initialized router:', this.router);
    this.Store.subscribe((state) => {
      //console.log('Current RootState:', state);
    }); }
  natours() {
    this.router.navigate(['csscourseapp', 'natours']);
  }
  nexter() {
    this.router.navigate(['csscourseapp', 'nexter']);
  }
  trillo() {
    this.router.navigate(['csscourseapp', 'trillo']);
  }
}
