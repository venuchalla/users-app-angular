import { CommonModule, Location } from '@angular/common';
import {
  Component,
  Input,
  OnDestroy,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  ComponentPortal,
  ComponentType,
  Portal,
  PortalModule,
  TemplatePortal,
} from '@angular/cdk/portal';
import { ModalpageChildComponent } from './modalpage-child.component';
import { PortalOutletService } from '../../services/portal-outlet.service';

@Component({
  selector: 'app-modalpage',
  standalone: true,
  imports: [CommonModule, PortalModule],
  templateUrl: './modalpage.component.html',
  styleUrl: './modalpage.component.scss',
})
export class ModalpageComponent implements OnDestroy {
  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;

  isOpen = false;
  selectedPortal: Portal<any> | null = null;
  private modalPortal?: TemplatePortal<any>;
  private defaultPortal?: ComponentPortal<ModalpageChildComponent>;

  @Input() modalTitle = '';
  @Input() content = '';

  constructor(
    private _viewContainerRef: ViewContainerRef,
    private _router: Router,
    private _location: Location,
    private _portalOutletService: PortalOutletService,
  ) {}

  show(portal?: Portal<any>) {
    if (portal) {
      this.selectedPortal = portal;
    } else if (!this.selectedPortal) {
      this.selectedPortal = this.getDefaultPortal();
    }

    if (!this.modalPortal) {
      this.modalPortal = new TemplatePortal(
        this.modalTemplate,
        this._viewContainerRef,
      );
    }

    this._portalOutletService.attach(this.modalPortal);
    this.isOpen = true;
  }

  openComponent<T>(component: ComponentType<T>, title?: string) {
    if (title) {
      this.modalTitle = title;
    }
    this.selectedPortal = new ComponentPortal(
      component,
      this._viewContainerRef,
    );
    this.show();
  }

  private getDefaultPortal(): ComponentPortal<ModalpageChildComponent> {
    if (!this.defaultPortal) {
      this.defaultPortal = new ComponentPortal(
        ModalpageChildComponent,
        this._viewContainerRef,
      );
    }
    return this.defaultPortal;
  }

  close() {
    this.isOpen = false;
    this.selectedPortal = null;
    this._portalOutletService.detach();

    if (this._router.url.startsWith('/modalpage')) {
      this._location.back();
    }
  }

  ngOnDestroy() {
    this._portalOutletService.detach();
  }
}
