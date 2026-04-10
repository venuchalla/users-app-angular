import { Route, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

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
  loadChildRoutse(): void {
    this.getPaths().subscribe((routes) => {
    const dynamicRoutes: Route[] = routes.map((route) => ({
      path: route.path,
      loadComponent: this.getLazyComponent(route.component as any),
    }));

    const updatedConfig = this.router.config.map((r) => {
      if (r.path === 'csscourseapp') {
        return {
          ...r,
          children: [
            ...(r.children || []),
            ...dynamicRoutes
          ]
        };
      }
      return r;
    });

    this.router.resetConfig(updatedConfig);
    });
  }
}

const CSSCOURSE_COMPONENTS = {
  NatoursComponent: () =>
    import('../../components/natours/natours.component')
      .then((m) => m.NatoursComponent),

  NexterComponent: () =>
    import('../../components/nexter/nexter.component')
      .then((m) => m.NexterComponent),

  TrilloComponent: () =>
    import('../../components/trillo/trillo.component')
      .then((m) => m.TrilloComponent),
      CourseapphomeComponent: () =>
    import('../../components/courseapphome/courseapphome.component')
      .then((m) => m.CourseapphomeComponent)
};

type ModuleKey =| 'NatoursComponent'| 'NexterComponent'| 'TrilloComponent'| 'CourseapphomeComponent';
