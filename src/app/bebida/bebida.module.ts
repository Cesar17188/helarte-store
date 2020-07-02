import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BebidadetailComponent } from './components/bebidadetail/bebidadetail.component';
import { BebidasComponent } from './components/bebidas/bebidas.component';
import { BebidasproductsComponent } from './components/bebidasproducts/bebidasproducts.component';

import { BebidaRoutingModule } from './bebida-routing.module';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [
    BebidadetailComponent,
    BebidasComponent,
    BebidasproductsComponent
  ],
  imports: [
    CommonModule,
    BebidaRoutingModule,
    SharedModule,
    MaterialModule
  ],

})
export class BebidaModule { }
