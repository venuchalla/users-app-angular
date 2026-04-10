import { Component, EventEmitter, Input, Output, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {


@Input() name: string = '';
cdata = input<string>('');
pout = output<string>();
@Output() pdata = new EventEmitter<string>();

childData: string = '';

onInputChange($event: any) {
  console.log("input value in child component ===> ", this.childData);
  this.pdata.emit(this.childData);
  this.pout.emit(this.childData);
}
  constructor() {}
  
}
