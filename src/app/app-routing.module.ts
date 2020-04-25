import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { IceproductsComponent } from './iceproducts/iceproducts.component';
import {BackeriesproductsComponent } from './backeriesproducts/backeriesproducts.component';
import { ContactComponent } from './contact/contact.component';
import { SaboresComponent } from './sabores/sabores.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IcecreamDetailComponent } from './icecream-detail/icecream-detail.component';
import { ProductsComponent } from './products/products.component';
import { CafesproductsComponent } from './cafesproducts/cafesproducts.component';
import { SnacksproductsComponent } from './snacksproducts/snacksproducts.component';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'productos',
        component: ProductsComponent
      },
      {
        path: 'helados',
        component: IceproductsComponent
      },
      {
        path: 'helados/:codigo',
        component: IcecreamDetailComponent
      },
      {
        path: 'sabores',
        component: SaboresComponent
      },
      {
        path: 'backeries',
        component: BackeriesproductsComponent
      },
      {
        path: 'backeries/:codigo',
        component: BackeriesproductsComponent
      },
      {
        path: 'cafes',
        component: CafesproductsComponent
      },
      {
        path: 'cafes/:codigo',
        component: CafesproductsComponent
      },
      {
        path: 'snacks',
        component: SnacksproductsComponent
      },
      {
        path: 'snacks/:codigo',
        component: SnacksproductsComponent
      },
      {
        path: 'contacto',
        component: ContactComponent
      },
      {
        path: '**',
        component: PageNotFoundComponent
      },
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
