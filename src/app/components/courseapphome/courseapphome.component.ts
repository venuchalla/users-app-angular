import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-courseapphome',
  standalone: true,
  imports: [RouterLink,MatCardModule,MatButtonModule,MatListModule,MatIconModule],
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
