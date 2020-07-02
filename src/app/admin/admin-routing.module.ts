import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductFormComponent } from './components/product-form/product-form.component';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { ListasComponent } from './components/listas/listas.component';
import { FormheladoComponent } from './components/formularios/helados/formhelado/formhelado.component';
import { EditheladoComponent } from './components/formularios/helados/edithelado/edithelado.component';


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
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
