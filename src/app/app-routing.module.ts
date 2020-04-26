import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules} from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { SaboresComponent } from './sabores/sabores.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
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
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'productos',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'helados',
        loadChildren: () => import('./icecream/icecream.module').then(m => m.IcecreamModule)
      },
      {
        path: 'sabores',
        component: SaboresComponent
      },
      {
        path: 'backeries',
        loadChildren: () => import('./backerie/backerie.module').then(m => m.BackerieModule)
      },
      {
        path: 'cafes',
        loadChildren: () => import('./cafe/cafe.module').then(m => m.CafeModule)
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
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
