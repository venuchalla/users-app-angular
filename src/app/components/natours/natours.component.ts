import { Component } from '@angular/core';
import { NatoursRoutingModule } from './natours-routing.module';


@Component({
  selector: 'app-natours',
  standalone: true,
  imports: [NatoursRoutingModule],
  templateUrl: './natours.component.html',
  styleUrl: './natours.component.scss',
})
export class NatoursComponent {}
