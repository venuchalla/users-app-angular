import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

////standalone: true,
//imports: [RouterOutlet],
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'users-app';
}
