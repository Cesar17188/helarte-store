import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BakerieDetailComponent } from './components/bakerie-detail/bakerie-detail.component';
import { BackeriesComponent } from './components/backeries/backeries.component';
import { BackeriesproductsContainer } from './containers/backeriesproducts/backeriesproducts.container';

import { BackerieRoutingModule } from './backerie-routing.module';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@material/material.module';

@NgModule({
  declarations: [
    BakerieDetailComponent,
    BackeriesComponent,
    BackeriesproductsContainer
  ],
  imports: [
    CommonModule,
    BackerieRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class BackerieModule { }
