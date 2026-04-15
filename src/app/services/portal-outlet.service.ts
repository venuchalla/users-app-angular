import { Injectable } from '@angular/core';
import { CdkPortalOutlet, Portal } from '@angular/cdk/portal';

@Injectable({ providedIn: 'root' })
export class PortalOutletService {
  private outlet?: CdkPortalOutlet;

  registerOutlet(outlet: CdkPortalOutlet) {
    this.outlet = outlet;
  }

  attach<T>(portal: Portal<T>) {
    if (!this.outlet) {
      throw new Error('Portal outlet is not registered.');
    }
    if (this.outlet.hasAttached()) {
      this.outlet.detach();
    }
    return this.outlet.attach(portal);
  }

  detach() {
    if (this.outlet?.hasAttached()) {
      this.outlet.detach();
    }
  }
}
