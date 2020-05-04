import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IceproductsComponent } from './components/iceproducts/iceproducts.component';
import { IcecreamDetailComponent } from './components/icecream-detail/icecream-detail.component';
import { HeladosComponent } from './components/helados/helados.component';

import { IceCreamRoutingModule } from './icecream-routing.module';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [
    IceproductsComponent,
    IcecreamDetailComponent,
    HeladosComponent,
  ],
  imports: [
    CommonModule,
    IceCreamRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class IcecreamModule { }
