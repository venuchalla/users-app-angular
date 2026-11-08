import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatIconModule, MatToolbarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
 @Input() prdocutNames: string[] = ['Angular', 'React']
  @Input() logoUrl: string = 'assets/icons/v.png'

}
