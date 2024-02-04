import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { NatoursComponent } from "./natours.component";


const natoursRoutes: Routes = [
    { path: '', component: NatoursComponent},
]
   
@NgModule({ declarations: [],
    imports: [RouterModule.forChild(natoursRoutes)],
    exports: [RouterModule]}
)

export class NatoursRoutingModule{
    
}