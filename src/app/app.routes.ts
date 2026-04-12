import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';
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
import { CardapplicationComponent } from './pages/cardapplication/cardapplication.component';
import { BookslistComponent } from './components/bookslist/bookslist.component';
import { CsscourseappComponent } from './pages/csscourseapp/csscourseapp.component';
import { CssCourseAppGuard } from './pages/csscourseapp/csscourseapp.gurard';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';

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
    path: 'app',
    component: EmptyPageLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: CardapplicationComponent,
      },
    ],
  },
  {
    path: 'csscourseapp',
    component: EmptyPageLayoutComponent,
    loadChildren: () =>
      import('./pages/csscourseapp/csscourserouting.module').then(
        (m) => m.CssCourseAppRoutingModule,
      ),

    canActivate: [
      function (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log(route, 'can activate guard ActivatedRouteSnapshot');
        console.log(state, 'can activate guard state');
        return true;
      },
    ],
    canDeactivate: [function () {}],
    canMatch: [CssCourseAppGuard],
    data: {
      title: 'CSS Course App (developer custom data)',
    },
    title: 'CSS Course App useing title property',
    providers: [],
  },
  {
    path: 'counter',
    component: SimplePageLayoutComponent,
    providers: [],
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
  { path: 'radiooptionselector', component: RadiobuttonComponent },
  { path: 'bookslist', component: BookslistComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'onboarding',
    component:EmptyPageLayoutComponent,
    loadChildren: () =>
      import('./pages/onboarding/onboarding.routes').then((m) => m.routes),
  },

  { path: '**', component: PageNotFoundComponent },
];
