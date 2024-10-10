import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-empty-page-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './empty-page-layout.component.html',
  styleUrl: './empty-page-layout.component.scss'
})
export class EmptyPageLayoutComponent {

}
