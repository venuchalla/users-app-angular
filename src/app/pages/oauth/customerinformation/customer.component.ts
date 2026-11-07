import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  standalone: true,
  templateUrl: './customer.component.html'
})
export class CustomerComponent {
  constructor() {
    console.log('CustomerComponent initialized');
  }
}
