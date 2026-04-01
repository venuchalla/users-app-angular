import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
@Component({
  selector: 'app-bottomsheet',
  standalone: true,
  imports: [],
  templateUrl: './bottomsheet.component.html',
  styleUrl: './bottomsheet.component.scss',
})
export class BottomsheetComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomsheetComponent>) {}

  closeSheet() {
    this.bottomSheetRef.dismiss();
  }
}
