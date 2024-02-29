import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { CounterComponent } from './pages/counter/counter.component';

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
  { path: '', component: HomeComponent },
  {
    path: 'csscourseapp',
    children: [
      {
        title:"CSS Course App",
        path: '',
        loadChildren: () =>
          import('./pages/csscourseapp/csscourserouting.module').then(
            (m) => m.CssCourseAppRoutingModule
          ),
      },
    ],
    canActivate:[function(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      console.log( route , "can activate guard ActivatedRouteSnapshot")
      console.log(state ,"can activate guard state")
      return true;
    }],
    canDeactivate:[function(){
      
    }],
    canMatch:[]
  },
  {
    path: 'counter',
    component:CounterComponent
  },
  { path: 'user', component: UserComponent },
  { path: '**', component: PageNotFoundComponent },
];
