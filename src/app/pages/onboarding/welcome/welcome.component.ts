import { Component, inject } from '@angular/core';
import { FlowService } from '../flow/flow.service';

@Component({
  selector: 'app-welcome',
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent{
 private flow = inject(FlowService);
 
  features = [
    { icon: '✦', title: 'Smart personalisation', desc: 'We tailor the experience to your unique needs' },
    { icon: '⚡', title: 'Instant setup', desc: 'Start being productive in under 2 minutes' },
    { icon: '🔒', title: 'Secure & private', desc: 'Your data is always encrypted and protected' }
  ];
 
  next() { this.flow.goNext(); }
}
