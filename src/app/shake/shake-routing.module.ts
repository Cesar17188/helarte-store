import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ShakesproductsComponent } from './components/shakesproducts/shakesproducts.component';
import { ShakedetailComponent } from './components/shakedetail/shakedetail.component';



const routes: Routes = [
  {
    path: '',
    component: ShakesproductsComponent,
  },
  {
    path: ':codigo',
    component: ShakedetailComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class ShakeRoutingModule { }
