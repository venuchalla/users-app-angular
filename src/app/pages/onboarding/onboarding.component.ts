import { Component, ViewEncapsulation } from '@angular/core';
import { provideRouter, RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './onboarding.routes';

@Component({
  selector: 'app-onboarding',
  standalone:true,
  imports: [RouterOutlet,RouterModule],
  providers:[],
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OnboardingComponent {

}
