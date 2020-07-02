import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules} from '@angular/router';

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
        path: 'crepes',
        loadChildren: () => import('./backerie/backerie.module').then(m => m.BackerieModule)
      },
      {
        path: 'cafes',
        loadChildren: () => import('./cafe/cafe.module').then(m => m.CafeModule)
      },
      {
        path: 'snacks',
        loadChildren: () => import('./snack/snack.module').then(m => m.SnackModule)
      },
      {
        path: 'contacto',
        loadChildren: () => import('./contacto/contacto.module').then(m => m.ContactoModule)
      },
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }
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
