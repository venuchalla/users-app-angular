import { Title } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { AdobeserviceService } from './components/adobeservice/adobeservice.service';
import { filter } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone:false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private router:Router ,private adobeService:AdobeserviceService,Title:Title){  
    console.log('AppComponent initialized router:', this.router ); 
    this.router.events.pipe(filter((event) : event is NavigationEnd => event instanceof NavigationEnd)).subscribe(event => {
      console.log('NavigationEnd event:', event);
      this.adobeService.trackEvent('NavigationEnd', { page : {url:event.url, name: Title.getTitle() }});
    });
  }
}
