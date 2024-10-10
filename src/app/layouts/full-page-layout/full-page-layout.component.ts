import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../components/footer/footer.component";
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-full-page-layout',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './full-page-layout.component.html',
  styleUrl: './full-page-layout.component.scss'
})
export class FullPageLayoutComponent {

}
