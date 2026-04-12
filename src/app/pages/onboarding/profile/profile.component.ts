import { Component, inject, OnInit, signal } from '@angular/core';
import { FlowService } from '../flow/flow.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent  implements OnInit{

   private flow = inject(FlowService);
 
  form = signal({ firstName: '', lastName: '', email: '', role: '', company: '' });
 
  roles = ['Engineer', 'Designer', 'Product Manager', 'Marketing', 'Sales', 'Executive', 'Other'];
 
  ngOnInit() {
    const saved = this.flow.getFormData('profile') as typeof this.form extends () => infer T ? T : never;
    if (saved && Object.keys(saved).length) {
      this.form.set(saved as any);
    }
  }
 
  isValid() {
    const f = this.form();
    return f.firstName.trim() && f.lastName.trim() && f.email.includes('@');
  }
 
  next() { this.flow.goNext(this.form() as any); }
  back() { this.flow.goBack(); }
}
