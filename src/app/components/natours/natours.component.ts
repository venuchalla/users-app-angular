import { Component } from '@angular/core';
import { NatoursRoutingModule } from './natours-routing.module';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-natours',
  standalone: true,
  imports: [NatoursRoutingModule],
  templateUrl: './natours.component.html',
  styleUrl: './natours.component.scss',
})
export class NatoursComponent {
  constructor(private titleService : Title){
    titleService.setTitle("Natours Project")
  }
}
