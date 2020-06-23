import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';




@NgModule({
  declarations: [
    ProductFormComponent,
    NavComponent,
    DashboardComponent,
    InventarioComponent,
    ListaProductosComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class AdminModule { }
