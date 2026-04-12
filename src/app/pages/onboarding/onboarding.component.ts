import { Component } from '@angular/core';
import { provideRouter, RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './onboarding.routes';

@Component({
  selector: 'app-onboarding',
  standalone:true,
  imports: [RouterOutlet,RouterModule],
  providers:[],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.scss',
})
export class OnboardingComponent {

}
