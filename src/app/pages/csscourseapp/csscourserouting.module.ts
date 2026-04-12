import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CsscourseappComponent } from './csscourseapp.component';
import { CssCourseAppRoutingService } from './csscourseapprouting.service';


export let cssRoutes: Routes = [
  { path: '', component: CsscourseappComponent, 
    children: [] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(cssRoutes)],
  providers: [CssCourseAppRoutingService],
  exports: [],
})
export class CssCourseAppRoutingModule {
  constructor(private routingService: CssCourseAppRoutingService) {
    this.routingService.getChildRoutes().subscribe((routes) => {
      cssRoutes[0].children = routes;
      console.log('CSS course app child routes loaded:', cssRoutes);
    });
  }
}
