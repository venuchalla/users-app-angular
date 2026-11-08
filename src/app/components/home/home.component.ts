import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { ParentComponent } from "../parent/parent.component";
import { ModalpageChildComponent } from '@pages/modalpage/modalpage-child.component';
import { ModalpageService } from '@app/services/modalpage.service';
import { DialogService } from '@app/services/dialog.service';
import { InputWithTooltipComponent } from "@app/Input/input-with-tooltip.component";
import { isPlatformBrowser } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    ParentComponent,
    InputWithTooltipComponent,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly applications = [
    { title: 'CSS Course App', category: 'Learning', description: 'Explore CSS lessons and examples.', route: '/csscourseapp', icon: 'school' },
    { title: 'User App', category: 'Application', description: 'Browse and manage user information.', route: '/user', icon: 'group' },
    { title: 'Counter App', category: 'Demo', description: 'A simple app demonstrating interactive state.', route: '/counter', icon: 'exposure_plus_1' },
    { title: 'Lifecycle Methods', category: 'Angular', description: 'Explore component lifecycle behavior.', route: '/lifecycleMethods', icon: 'autorenew' },
    { title: 'Card Application', category: 'Material', description: 'See a card-based Material example.', route: '/app', icon: 'credit_card' },
    { title: 'Books List', category: 'Data', description: 'Browse the books list example.', route: '/bookslist', icon: 'menu_book' },
    { title: 'Radio Button', category: 'Material', description: 'Try a radio-option selection example.', route: '/radiooptionselector', icon: 'radio_button_checked' },
    { title: 'Onboarding Application', category: 'Application', description: 'Walk through the onboarding experience.', route: '/onboarding', icon: 'how_to_reg' },
    { title: 'Portal Example', category: 'Angular', description: 'Explore content rendered through a portal.', route: '/portalexample', icon: 'dashboard_customize' },
    { title: 'Modal Page', category: 'Components', description: 'Open the modal page example.', route: '/modalpage', icon: 'open_in_new' },
  ];

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
