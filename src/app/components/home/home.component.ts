import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { BookslistComponent } from '../bookslist/bookslist.component';
import { ParentComponent } from "../parent/parent.component";
import { ModalpageChildComponent } from '@pages/modalpage/modalpage-child.component';
import { ModalpageService } from '@app/services/modalpage.service';
import { DialogService } from '@app/services/dialog.service';
import { InputWithTooltipComponent } from "@app/Input/input-with-tooltip.component";
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ParentComponent, InputWithTooltipComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(
    private titleService: Title,
    private modalpageService: ModalpageService,
    private dialogService: DialogService,
  @Inject(PLATFORM_ID) private platformId: Object) {
    titleService.setTitle("Home");
    if (isPlatformBrowser(this.platformId)) {
    (window as any).modalpageService =  modalpageService;
     (window as any).dialogService =  dialogService;
  }
     
  }

  openModal() {
    this.modalpageService.openComponent(ModalpageChildComponent, 'Modal Page Example');
  }

  openDialog() {
    this.dialogService
      .showDialog({
        title: 'Dynamic Dialog Shell',
        component: ModalpageChildComponent,
        componentInputs: { /* pass inputs here if needed */ },
        width: '500px',
        hasBackdrop: false,
      })
      .afterClosed()
      .subscribe((result) => {
        console.log('Dialog closed with:', result);
      });
  }
}
