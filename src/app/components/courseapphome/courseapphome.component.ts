import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-courseapphome',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './courseapphome.component.html',
  styleUrl: './courseapphome.component.scss'
})
export class CourseapphomeComponent {

  constructor(private titleService : Title){
   // titleService.setTitle("CSS Course App")
  }
}
