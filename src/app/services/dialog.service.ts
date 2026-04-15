import { Injectable, Type } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogboxComponent, DialogShellData } from '@pages/dialogbox/dialogbox.component';

export interface DialogConfig {
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  width?: string;
  disableClose?: boolean;
  hasBackdrop?: boolean;
  component?: Type<unknown>;
  componentInputs?: Record<string, unknown>;
  data?: Record<string, unknown>;
}

@Injectable({ providedIn: 'root' })
export class DialogService {
  private lastDialogRef?: MatDialogRef<DialogboxComponent, boolean>;

  constructor(private dialog: MatDialog) {}

  showDialog(config: DialogConfig) {
    const ref = this.dialog.open<DialogboxComponent, DialogShellData, boolean>(DialogboxComponent, {
      width: config.width || '400px',
      data: {
        title: config.title || 'Confirm',
        message: config.message || '',
        confirmText: config.confirmText || 'Ok',
        cancelText: config.cancelText || 'Cancel',
        component: config.component,
        componentInputs: config.componentInputs,
        ...config.data,
      },
      disableClose: config.disableClose ?? false,
      hasBackdrop: config.hasBackdrop ?? true,
    });
    this.lastDialogRef = ref;
    return ref;
  }

  closeDialog(result?: boolean) {
    if (this.lastDialogRef) {
      this.lastDialogRef.close(result);
      this.lastDialogRef = undefined;
    }
  }
}
