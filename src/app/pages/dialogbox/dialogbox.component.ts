import { Component ,ChangeDetectionStrategy,inject} from '@angular/core';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-dialogbox',
  standalone: true,
  imports: [MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dialogbox.component.html',
  styleUrl: './dialogbox.component.scss'
})
export class DialogboxComponent {
  //readonly dialogRef = inject(MatDialogRef<DialogboxComponent>);

}
