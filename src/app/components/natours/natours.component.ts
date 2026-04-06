import { RootState } from '@app/state';
import { Component } from '@angular/core';
import { NatoursRoutingModule } from './natours-routing.module';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-natours',
  standalone: true,
  imports: [NatoursRoutingModule],
  templateUrl: './natours.component.html',
  styleUrl: './natours.component.scss',
})
export class NatoursComponent {
  constructor(private titleService : Title,private RootState: Store<RootState>) {
    titleService.setTitle("Natours Project")
    this.RootState.subscribe((state) => {
      console.log('Current RootState in NatoursComponent:', state);
    });
  }
}
