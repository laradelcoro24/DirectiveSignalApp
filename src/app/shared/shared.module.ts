import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLebelDirective } from './directives/custom-lebel.directive';


@NgModule({
  declarations: [
    CustomLebelDirective
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    CustomLebelDirective
  ]
})
export class SharedModule { }
