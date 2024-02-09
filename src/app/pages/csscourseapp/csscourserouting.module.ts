import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CsscourseappComponent } from './csscourseapp.component';
import { NexterComponent } from '../../components/nexter/nexter.component';
import { TrilloComponent } from '../../components/trillo/trillo.component';
import { NatoursComponent } from '../../components/natours/natours.component';
import { CourseapphomeComponent } from '../../components/courseapphome/courseapphome.component';

const cssRoutes: Routes = [
  {
    path: '',
    component: CsscourseappComponenst,
    children: [
      { path: '', component: CourseapphomeComponent },
      {
        path: 'natours',
        component: NatoursComponent,
        /* loadChildren: () =>
          import('../../components/natours/natours.module').then(
            (m) => m.NatoursModule
          ),*/
      },
      {
        path: 'nexter',
        component: NexterComponent,
      },
      {
        path: 'trillo',
        component: TrilloComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(cssRoutes)],
  exports: [RouterModule],
})
export class CssCourseAppRoutingModule {}
