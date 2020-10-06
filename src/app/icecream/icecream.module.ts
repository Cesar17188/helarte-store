import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IceproductsContainer } from './containers/iceproducts/iceproducts.container';
import { IcecreamDetailComponent } from './components/icecream-detail/icecream-detail.component';
import { HeladosComponent } from './components/helados/helados.component';

import { IceCreamRoutingModule } from './icecream-routing.module';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';

import { IngredientsModule } from '../ingredients/ingredients.module';

@NgModule({
  declarations: [
    IceproductsContainer,
    IcecreamDetailComponent,
    HeladosComponent,
  ],
  imports: [
    CommonModule,
    IceCreamRoutingModule,
    SharedModule,
    MaterialModule,
    IngredientsModule
  ]
})
export class IcecreamModule { }
