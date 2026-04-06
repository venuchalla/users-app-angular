import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-courseapphome',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './courseapphome.component.html',
  styleUrl: './courseapphome.component.scss'
})
export class CourseapphomeComponent {

  constructor(private titleService : Title,private router: Router){
   // titleService.setTitle("CSS Course App")
  }

   gotoHome(){
    this.router.navigate(['home'])
  }
}
