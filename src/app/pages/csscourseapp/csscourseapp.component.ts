import { RootState } from '@app/state';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-csscourseapp',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './csscourseapp.component.html',
  styleUrl: './csscourseapp.component.scss',
})
export class CsscourseappComponent {
  constructor(
    private router: Router,
    private RootState: Store<RootState>,
  ) {
    
  }
  ngOnInit() {
   console.log('CsscourseappComponent initialized router:', this.router);
    console.log('CsscourseappComponent initialized RootState:', this.RootState);
    this.RootState.subscribe((state) => {
      console.log('Current RootState:', state);
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
