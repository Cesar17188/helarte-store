import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BakerieDetailComponent } from './components/bakerie-detail/bakerie-detail.component';
import { BackeriesComponent } from './components/backeries/backeries.component';
import { BackeriesproductsComponent } from './components/backeriesproducts/backeriesproducts.component';

import { BackerieRoutingModule } from './backerie-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BakerieDetailComponent,
    BackeriesComponent,
    BackeriesproductsComponent
  ],
  imports: [
    CommonModule,
    BackerieRoutingModule,
    SharedModule
  ]
})
export class BackerieModule { }
