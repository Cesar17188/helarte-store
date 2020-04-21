import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { IceproductsComponent } from './iceproducts/iceproducts.component';
import { ContactComponent } from './contact/contact.component';
import { SaboresComponent } from './sabores/sabores.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'helados',
    component: IceproductsComponent
  },
  {
    path: 'contacto',
    component: ContactComponent
  },
  {
    path: 'sabores',
    component: SaboresComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
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
