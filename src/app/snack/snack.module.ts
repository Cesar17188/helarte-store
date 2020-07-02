import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnacksComponent } from './components/snacks/snacks.component';
import { SnackDetailComponent } from './components/snack-detail/snack-detail.component';
import { SnacksproductsComponent } from './components/snacksproducts/snacksproducts.component';

import { SnackRoutingModule } from './snacks-routing.module';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [
    SnacksComponent,
    SnackDetailComponent,
    SnacksproductsComponent
  ],
  imports: [
    CommonModule,
    SnackRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class SnackModule { }
