import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { BookslistComponent } from '../bookslist/bookslist.component';
import { ParentComponent } from "../parent/parent.component";
import { ModalpageChildComponent } from '@pages/modalpage/modalpage-child.component';
import { ModalpageService } from '@app/services/modalpage.service';
import { InputWithTooltipComponent } from "@app/Input/input-with-tooltip.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ParentComponent, InputWithTooltipComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private titleService: Title, private modalpageService: ModalpageService) {
    titleService.setTitle("Home");
  }

  openModal() {
    this.modalpageService.openComponent(ModalpageChildComponent, 'Modal Page Example');
  }
}
