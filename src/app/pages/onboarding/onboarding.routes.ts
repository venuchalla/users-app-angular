import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { flowGuard } from './flow/flow.guard';
import { ProfileComponent } from './profile/profile.component';
import { VerificationComponent } from './verification/verification.component';
import { SummaryComponent } from './summary/summary.component';
import { OnboardingComponent } from './onboarding.component';

export const routes: Routes = [
  {
    path: '',
    component: OnboardingComponent,
    children: [
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      {
        path: 'welcome',
        component: WelcomeComponent,
        canActivate: [],
        data: { page: 'welcome' },
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [],
        data: { page: 'profile' },
      },
      {
        path: 'verification',
        component: VerificationComponent,
        canActivate: [],
        data: { page: 'verification' },
      },
      {
        path: 'summary',
        component: SummaryComponent,
        canActivate: [],
        data: { page: 'complete' },
      },
    ],
  },
];
