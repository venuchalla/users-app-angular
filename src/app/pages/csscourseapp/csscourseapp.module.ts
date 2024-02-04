import { NgModule } from "@angular/core";
import { NatoursRoutingModule } from "../../components/natours/natours-routing.module";
import { CssCourseAppRoutingModule } from "./csscourserouting.module";


@NgModule({
    imports:[CssCourseAppRoutingModule,NatoursRoutingModule]
})

export class CssCourseAppModule{

}