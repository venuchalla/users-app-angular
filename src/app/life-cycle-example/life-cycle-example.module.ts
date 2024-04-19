import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifeCycleExampleComponent } from './life-cycle-example/life-cycle-example.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LifeCycleExampleComponent
  ], 
  exports:[
    LifeCycleExampleComponent
  ]
})
export class LifeCycleExampleModule { }
