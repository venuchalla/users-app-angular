import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './pages/user/user.component';

/**
 *  {
        path: 'natours',
        loadChildren: () =>
          import('./components/natours/natours.module').then(
            (m) => m.NatoursModule
          ),
      },
 */
//component: HomeComponent 
export const routes: Routes = [
  { path: '', redirectTo:'csscourseapp',pathMatch:'full'},
  {
    path: 'csscourseapp',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/csscourseapp/csscourserouting.module').then(
            (m) => m.CssCourseAppRoutingModule
          ),
      },
    ],
  },
  { path: 'user', component: UserComponent },
  { path: '**', component: PageNotFoundComponent },
];
