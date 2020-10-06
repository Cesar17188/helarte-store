import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ShakesproductsContainer } from './containers/shakesproducts/shakesproducts.container';
import { ShakedetailComponent } from './components/shakedetail/shakedetail.component';



const routes: Routes = [
  {
    path: '',
    component: ShakesproductsContainer,
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
