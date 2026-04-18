import { Component, ViewEncapsulation } from '@angular/core';
import { provideRouter, RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './onboarding.routes';
//import { ModalpageComponent } from "../modalpage/modalpage.component";

@Component({
  selector: 'app-onboarding',
  standalone:true,
  imports: [RouterOutlet, RouterModule],
  providers:[],
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'], 
})
export class OnboardingComponent {

}
