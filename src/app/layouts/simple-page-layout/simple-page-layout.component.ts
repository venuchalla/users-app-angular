import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-simple-page-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './simple-page-layout.component.html',
  styleUrl: './simple-page-layout.component.scss'
})
export class SimplePageLayoutComponent {

}
