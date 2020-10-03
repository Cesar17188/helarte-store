import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductFormComponent } from './components/product-form/product-form.component';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { ListasComponent } from './components/listas/listas.component';
import { FormheladoComponent } from './components/formularios/helados/formhelado/formhelado.component';
import { EditheladoComponent } from './components/formularios/helados/edithelado/edithelado.component';
import { FormcrepeComponent } from './components/formularios/crepes/formcrepe/formcrepe.component';
import { EditcrepeComponent } from './components/formularios/crepes/editcrepe/editcrepe.component';


const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'panel',
        component: DashboardComponent
      },
      {
        path: 'create',
        component: ProductFormComponent,
      },
      {
        path: 'productos',
        component: ListasComponent
      },
      {
        path: 'productos/helado/create',
        component: FormheladoComponent
      },
      {
        path: 'productos/helado/edit/:codigo',
        component: EditheladoComponent
      },
      {
        path: 'productos/crepe/create',
        component: FormcrepeComponent
      },
      {
        path: 'productos/crepe/edit/:codigo',
        component: EditcrepeComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
