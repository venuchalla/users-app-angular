import { AfterViewInit, Component, ChangeDetectionStrategy, Type, ViewChild, ViewContainerRef, inject } from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

export interface DialogShellData {
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  component?: Type<unknown>;
  componentInputs?: Record<string, unknown>;
  [key: string]: unknown;
}

@Component({
  selector: 'app-dialogbox',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dialogbox.component.html',
  styleUrl: './dialogbox.component.scss'
})
export class DialogboxComponent implements AfterViewInit {
  @ViewChild('dynamicContent', { read: ViewContainerRef, static: true })
  dynamicContent!: ViewContainerRef;

  readonly dialogRef = inject(MatDialogRef<DialogboxComponent, boolean>);
  readonly data = inject(MAT_DIALOG_DATA) as DialogShellData;

  ngAfterViewInit() {
    if (this.data.component) {
      this.dynamicContent.clear();
      const componentRef = this.dynamicContent.createComponent(this.data.component);
      const inputs = (this.data.componentInputs ?? {}) as Record<string, unknown>;
      const instance = componentRef.instance as Record<string, unknown>;
      Object.assign(instance, inputs);
    }
  }
}
