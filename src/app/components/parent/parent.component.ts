import { on } from '@ngrx/store';
import { Component, Input, Output, input, EventEmitter } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, FormsModule,MatInputModule,MatFormFieldModule,ReactiveFormsModule,MatDividerModule
    
  ],
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
