import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CsscourseappComponent } from './csscourseapp.component';
import { NexterComponent } from '../../components/nexter/nexter.component';
import { TrilloComponent } from '../../components/trillo/trillo.component';
import { NatoursComponent } from '../../components/natours/natours.component';
import { CourseapphomeComponent } from '../../components/courseapphome/courseapphome.component';
import { CssCourseAppRoutingService } from './csscourseapprouting.service';

const cssRoutes: Routes = [
  { path: '', 
    component: CourseapphomeComponent },
  {
    path: 'natours',
    component: NatoursComponent,
  },

  {
    path: 'nexter',
    component: NexterComponent,
  },
  {
    path: 'trillo',
    component: TrilloComponent,
  },
];
const cssRoutes1: Routes = [
  { path: '', 
    component: CourseapphomeComponent 
  },
];
// Note: The actual routes will be loaded dynamically by the service, so we can keep this array empty or with a default route.
@NgModule({
  imports: [RouterModule.forChild(cssRoutes1)],
  providers: [CssCourseAppRoutingService],
  exports: [],
})
export class CssCourseAppRoutingModule {
  constructor(private routingService: CssCourseAppRoutingService) {
   //this.routingService.loadChildRoutse();
  }
}
