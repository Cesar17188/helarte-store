import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IceproductsComponent } from './components/iceproducts/iceproducts.component';
import { IcecreamDetailComponent } from './components/icecream-detail/icecream-detail.component';
import { HeladosComponent } from './components/helados/helados.component';
import { FlavorComponent } from './components/flavor/flavor.component';
import { SaboresComponent } from './components/sabores/sabores.component';

import { IceCreamRoutingModule } from './icecream-routing.module';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [
    IceproductsComponent,
    IcecreamDetailComponent,
    HeladosComponent,
    FlavorComponent,
    SaboresComponent
  ],
  imports: [
    CommonModule,
    IceCreamRoutingModule,
    SharedModule,
    MaterialModule
  ],
  entryComponents: [
    SaboresComponent
  ]
})
export class IcecreamModule { }