import { Route, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CssCourseAppRoutingService {
  constructor(private router: Router) {}

  getPaths() {
    return of([
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
      console.log('Received routes from service:', routes);
      const cssCourseApproutes: Route[] = routes.map((route) => {
        return {
          path: route.path,
          loadChildren: () =>
            this.getLazyComponent(route.component as ModuleKey)().then(
              (comp) => {
                console.log(`Loaded component for path "${route.path}":`, comp);
                return comp;
              },
            ),
        };
      });
      console.log('Mapped Routes:', cssCourseApproutes);
      const currentConfig = this.router.config;
      console.log('Current Router Config before update:', currentConfig);
      this.router.resetConfig([...currentConfig, ...cssCourseApproutes]);
      console.log('Updated Router Config:', this.router.config);
    });
  }
}

export const CSSCOURSE_COMPONENTS = {
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
};
type ModuleKey = keyof typeof CSSCOURSE_COMPONENTS;
