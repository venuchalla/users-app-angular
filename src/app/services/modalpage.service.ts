import { Injectable } from '@angular/core';
import { ComponentType, Portal } from '@angular/cdk/portal';
import { ModalpageComponent } from '../pages/modalpage/modalpage.component';

@Injectable({ providedIn: 'root' })
export class ModalpageService {
  private modal?: ModalpageComponent;
  private pendingAction?: () => void;

  setModal(modal: ModalpageComponent) {
    this.modal = modal;
    if (this.pendingAction) {
      this.pendingAction();
      this.pendingAction = undefined;
    }
  }

  show(portal?: Portal<any>) {
    if (this.modal) {
      this.modal.show(portal);
    } else {
      this.pendingAction = () => this.modal?.show(portal);
    }
  }

  openComponent<T>(component: ComponentType<T>, title?: string) {
    if (this.modal) {
      this.modal.openComponent(component, title);
    } else {
      this.pendingAction = () => this.modal?.openComponent(component, title);
    }
  }

  close() {
    this.modal?.close();
  }
}
