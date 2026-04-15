import { Title } from '@angular/platform-browser';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { AdobeserviceService } from './components/adobeservice/adobeservice.service';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CdkPortalOutlet } from '@angular/cdk/portal';
import { PortalModule } from '@angular/cdk/portal';
import { PortalOutletService } from './services/portal-outlet.service';
import { ModalpageComponent } from './pages/modalpage/modalpage.component';
import { ModalpageService } from './services/modalpage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    PortalModule,
    ModalpageComponent,
  ],
})
export class AppComponent implements AfterViewInit {
  @ViewChild(CdkPortalOutlet) portalOutlet!: CdkPortalOutlet;
  @ViewChild(ModalpageComponent) modalPage!: ModalpageComponent;
  constructor(
    private router: Router,
    private adobeService: AdobeserviceService,
    private portalOutletService: PortalOutletService,
    private modalpageService: ModalpageService,
    Title: Title,
  ) {
   // console.log('AppComponent initialized router:', this.router);
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd,
        ),
      )
      .subscribe((event) => {
        //console.log('NavigationEnd event:', event);
        this.adobeService.trackEvent('NavigationEnd', {
          page: { url: event.url, name: Title.getTitle() },
        });
      });
  }

  ngAfterViewInit() {
    this.portalOutletService.registerOutlet(this.portalOutlet);
    this.modalpageService.setModal(this.modalPage);
  }
}
