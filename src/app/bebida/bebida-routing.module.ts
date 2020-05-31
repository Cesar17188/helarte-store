import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { BebidasproductsComponent } from './components/bebidasproducts/bebidasproducts.component';
import { BebidadetailComponent } from './components/bebidadetail/bebidadetail.component';


const routes: Routes = [
  {
    path: '',
    component: BebidasproductsComponent
  },
  {
    path: 'codigo',
    component: BebidadetailComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BebidaRoutingModule { }
