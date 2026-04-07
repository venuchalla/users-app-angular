import { Component } from '@angular/core';
import {  MatCardModule } from '@angular/material/card';
import { MatToolbar } from "@angular/material/toolbar";
import { HeaderComponent } from "@components/header/header.component";
import { FooterComponent } from "@components/footer/footer.component";

@Component({
  selector: 'app-cardapplication',
  standalone: true,
  imports: [MatCardModule, MatToolbar, HeaderComponent, FooterComponent],
  templateUrl: './cardapplication.component.html',
  styleUrl: './cardapplication.component.scss'
})
export class CardapplicationComponent {

}
