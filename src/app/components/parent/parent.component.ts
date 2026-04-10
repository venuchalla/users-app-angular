import { on } from '@ngrx/store';
import { Component, Input, Output, input, EventEmitter } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { FormsModule } from "@angular/forms";
import e from 'express';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  
  inputValue: string = '';

  childData: string = '';

  ppData: string = '';

  constructor() {}
  onInputChange() {
    console.log("input value in parent component ===> ", this.inputValue);
  }
  onChildDataReceived(data: string) {
    console.log("data received from child component ===> ", data);
    this.childData = data;

  }
  onChildOutputReceived(data: string) {
    console.log("output received from child component ===> ", data);
    this.ppData = data;
  }
}
