import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
@Component({
  selector: 'app-radiooptionselector',
  standalone: true,
  imports: [ MatRadioModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule,
    MatCardModule,
    MatButtonModule],
  templateUrl: './radiooptionselector.component.html',
  styleUrl: './radiooptionselector.component.scss'
})
export class RadiooptionselectorComponent {

}
