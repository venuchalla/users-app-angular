import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { NatoursComponent } from "./natours.component";
import { EmptyPageLayoutComponent } from '@app/layouts/empty-page-layout/empty-page-layout.component';


const natoursRoutes: Routes = [
    { path: '', component: EmptyPageLayoutComponent,children:[{path:'',pathMatch:'full',component:NatoursComponent}]},
]
   
@NgModule({ declarations: [],
    imports: [RouterModule.forChild(natoursRoutes)],
    exports: [RouterModule]}
)

export class NatoursRoutingModule{
    
}