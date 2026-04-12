import { ActivatedRouteSnapshot, Route, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CssCourseAppRoutingService {
  constructor(private router: Router) {}

  getPaths() {
    return of([
      { path: '', component: 'CourseapphomeComponent' },
      { path: 'natours', component: 'NatoursComponent' },
      { path: 'nexter', component: 'NexterComponent' },
     { path: 'trillo', component: 'TrilloComponent' },
    ]);
  }

  private getLazyComponent(moduleName: ModuleKey) {
    return CSSCOURSE_COMPONENTS[moduleName];
  }

  getChildRoutes(): Observable<void> {
    this.getPaths().subscribe((routes) => {
      const appRoutes = [...this.router.config];
      console.log("app routes :",appRoutes)
      const parentRoute = appRoutes.find((r) => r.path === 'csscourseapp');
      console.log('Parent route before update:', parentRoute);
       if (!parentRoute) {
        console.warn('Parent route not found');
        //return;
      }
      
    
      const lazyRoute = parentRoute?.children?.find((r) => r.loadChildren);
      console.log('Found lazy route:', lazyRoute);
      if (!lazyRoute) {
       console.warn('Target lazy route not found');
       return;
      }


      const dynamicRoutes: Route[] = routes.map((route) => ({
        path: route.path,
        //pathMatch: 'full',
        loadComponent: this.getLazyComponent(route.component as any),
        canActivate :[function (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
          console.log(route, 'can activate guard ActivatedRouteSnapshot');
          return true;
        }]
      }));
      
      //parentRoute.children = [...dynamicRoutes];

     // lazyRoute.children = dynamicRoutes;
      const updatedConfig = [...appRoutes];
      // const updatedConfig = this.router.config.map((r) => {
      //   if (r.path === 'csscourseapp') {
      //      return {
      //      ...r,
      //     children: [...(r.children || []), ...dynamicRoutes],
      //   };
      // }
      // return r;
      // });
      console.log('Updated Router Config:', updatedConfig);
      //this.router.resetConfig(updatedConfig);
    });
    return of(void 0);
  }
}

const CSSCOURSE_COMPONENTS = {
  NatoursComponent: () =>
    import('../../components/natours/natours.component').then(
      (m) => m.NatoursComponent,
    ),

  NexterComponent: () =>
    import('../../components/nexter/nexter.component').then(
      (m) => m.NexterComponent,
    ),

  TrilloComponent: () =>
    import('../../components/trillo/trillo.component').then(
      (m) => m.TrilloComponent,
    ),
  CourseapphomeComponent: () =>
    import('../../components/courseapphome/courseapphome.component').then(
      (m) => m.CourseapphomeComponent,
    ),
};

type ModuleKey =
  | 'NatoursComponent'
  | 'NexterComponent'
  | 'TrilloComponent'
  | 'CourseapphomeComponent';
