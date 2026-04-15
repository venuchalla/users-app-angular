import { ComponentPortal, DomPortal, Portal, PortalModule, TemplatePortal } from '@angular/cdk/portal';
import { AfterViewInit, Component, ElementRef, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portalexample',
  imports: [PortalModule, CommonModule],
  templateUrl: './portalexample.component.html',
  styleUrl: './portalexample.component.scss',
})
export class PortalexampleComponent  implements AfterViewInit {
 @ViewChild('templatePortalContent') templatePortalContent!: TemplateRef<unknown>;
  @ViewChild('domPortalContent') domPortalContent!: ElementRef<HTMLElement>;

  selectedPortal!: Portal<any>;
  componentPortal!: ComponentPortal<ComponentPortalExample>;
  templatePortal!: TemplatePortal<any>;
  domPortal!: DomPortal<any>;

  constructor(private _viewContainerRef: ViewContainerRef) { }

  ngAfterViewInit() {
    this.componentPortal = new ComponentPortal(ComponentPortalExample);
    this.templatePortal = new TemplatePortal(
      this.templatePortalContent,
      this._viewContainerRef
    );
    this.domPortal = new DomPortal(this.domPortalContent);
  }
}

@Component({
  selector: 'component-portal-example',
  standalone: true,
  template: 'Hello, this is a component portal'
})
export class ComponentPortalExample { }
