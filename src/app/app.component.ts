import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, Title } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { AdobeserviceService } from './components/adobeservice/adobeservice.service';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CounterComponent } from './pages/counter/counter.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { UserComponent } from './pages/user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
  ],
})
export class AppComponent {
  constructor(
    private router: Router,
    private adobeService: AdobeserviceService,
    Title: Title,
  ) {
    console.log('AppComponent initialized router:', this.router);
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd,
        ),
      )
      .subscribe((event) => {
        console.log('NavigationEnd event:', event);
        this.adobeService.trackEvent('NavigationEnd', {
          page: { url: event.url, name: Title.getTitle() },
        });
      });
  }
}
