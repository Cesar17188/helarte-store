import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CafeDetailComponent } from './components/cafe-detail/cafe-detail.component';
import { CafesComponent } from './components/cafes/cafes.component';
import { CafesproductsContainer } from './containers/cafesproducts/cafesproducts.containers';

import { CafeRoutingModule } from './cafe-routing.module';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@material/material.module';

@NgModule({
  declarations: [
    CafeDetailComponent,
    CafesComponent,
    CafesproductsContainer
  ],
  imports: [
    CommonModule,
    CafeRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class CafeModule { }
