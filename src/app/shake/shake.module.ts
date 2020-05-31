import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShakedetailComponent } from './components/shakedetail/shakedetail.component';
import { ShakesComponent } from './components/shakes/shakes.component';
import { ShakesproductsComponent } from './components/shakesproducts/shakesproducts.component';

import { ShakeRoutingModule } from './shake-routing.module';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [
    ShakedetailComponent,
    ShakesComponent,
    ShakesproductsComponent,

  ],
  imports: [
    CommonModule,
    ShakeRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class ShakeModule { }
 