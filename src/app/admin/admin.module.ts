import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { ListaProductosComponent } from './components/listado/lista-productos/lista-productos.component';
import { ListasComponent } from './components/listas/listas.component';
import { ListaHeladosComponent } from './components/listado/lista-helados/lista-helados.component';
import { FormheladoComponent } from './components/formularios/helados/formhelado/formhelado.component';
import { EditheladoComponent } from './components/formularios/helados/edithelado/edithelado.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ListaCrepesComponent } from './components/listado/lista-crepes/lista-crepes.component';
import { EditcrepeComponent } from './components/formularios/crepes/editcrepe/editcrepe.component';
import { FormcrepeComponent } from './components/formularios/crepes/formcrepe/formcrepe.component';



@NgModule({
  declarations: [
    ProductFormComponent,
    NavComponent,
    DashboardComponent,
    InventarioComponent,
    ListaProductosComponent,
    ListasComponent,
    ListaHeladosComponent,
    FormheladoComponent,
    EditheladoComponent,
    ProfileComponent,
    ListaCrepesComponent,
    EditcrepeComponent,
    FormcrepeComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class AdminModule { }
