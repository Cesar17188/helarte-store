import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IceproductsComponent } from './components/iceproducts/iceproducts.component';
import { IcecreamDetailComponent } from './components/icecream-detail/icecream-detail.component';
import { HeladosComponent } from './components/helados/helados.component';
import { FlavorComponent } from './components/flavor/flavor.component';
import { SaboresComponent } from './components/sabores/sabores.component';
import { SyrupsComponent } from './components/syrups/syrups.component';
import { SyrupComponent } from './components/syrup/syrup.component';

import { IceCreamRoutingModule } from './icecream-routing.module';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';
import { ToppingComponent } from './components/topping/topping.component';
import { ToppingsComponent } from './components/toppings/toppings.component';

@NgModule({
  declarations: [
    IceproductsComponent,
    IcecreamDetailComponent,
    HeladosComponent,
    FlavorComponent,
    SaboresComponent,
    SyrupsComponent,
    SyrupComponent,
    ToppingComponent,
    ToppingsComponent
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
