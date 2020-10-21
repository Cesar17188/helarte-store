import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { MaterialModule } from '@material/material.module';
import { SharedModule } from '@shared/shared.module';

import { OrderComponent } from './components/order/order.component';
import { DatosPersonalesComponent } from './components/datos-personales/datos-personales.component';


@NgModule({
  declarations: [OrderComponent, DatosPersonalesComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MaterialModule,
    SharedModule,
  ]
})
export class OrderModule { }
