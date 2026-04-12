import { NgModule } from "@angular/core";
import { CssCourseAppRoutingModule } from "./csscourserouting.module";


@NgModule({
    imports:[CssCourseAppRoutingModule]
    
})

export class CssCourseAppModule {
    
constructor(){
    console.log('CssCourseAppModule loaded');
}

}