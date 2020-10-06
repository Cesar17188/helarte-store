import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShakedetailComponent } from './components/shakedetail/shakedetail.component';
import { ShakesComponent } from './components/shakes/shakes.component';
import { ShakesproductsContainer } from './containers/shakesproducts/shakesproducts.container';

import { ShakeRoutingModule } from './shake-routing.module';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [
    ShakedetailComponent,
    ShakesComponent,
    ShakesproductsContainer,

  ],
  imports: [
    CommonModule,
    ShakeRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class ShakeModule { }
