import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Routes,
} from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { CounterComponent } from './pages/counter/counter.component';
import { LifeCycleExampleComponent } from './life-cycle-example/life-cycle-example/life-cycle-example.component';
import { RadiooptionselectorComponent } from './pages/radiooptionselector/radiooptionselector.component';
import { DialogboxComponent } from './pages/dialogbox/dialogbox.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { EmptyPageLayoutComponent } from './layouts/empty-page-layout/empty-page-layout.component';
import { SimplePageLayoutComponent } from './layouts/simple-page-layout/simple-page-layout.component';
import { FullPageLayoutComponent } from './layouts/full-page-layout/full-page-layout.component';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './pages/counter/counter.reducer';

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
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
      },
    ],
  },
  {
    path: 'csscourseapp',
    component: EmptyPageLayoutComponent,
    children: [
      {
        title: 'CSS Course App',
        path: '',
        loadChildren: () =>
          import('./pages/csscourseapp/csscourserouting.module').then(
            (m) => m.CssCourseAppRoutingModule
          ),
      },
    ],
    canActivate: [
      function (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log(route, 'can activate guard ActivatedRouteSnapshot');
        console.log(state, 'can activate guard state');
        return true;
      },
    ],
    canDeactivate: [function () {}],
    canMatch: [],
  },
  {
    path: 'counter',
    component: SimplePageLayoutComponent,
    providers:[],
    children: [{ path: '', pathMatch: 'full', component: CounterComponent }],
  },
  {
    path: 'user',
    component: FullPageLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: UserComponent,
      },
    ],
  },
  {
    path: 'lifecycleMethods',
    component: LifeCycleExampleComponent,
  },
  { path: 'radiobuttondemo', component: RadiooptionselectorComponent },
  { path: 'dialogdemo', component: DialogboxComponent },
  { path: '**', component: PageNotFoundComponent },
];
