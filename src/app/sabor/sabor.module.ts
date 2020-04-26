import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaboresComponent } from './components/sabores/sabores.component';
import { FlavorComponent } from './components/flavor/flavor.component';

import { SaborRoutingModule } from './sabor-routing.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    SaboresComponent,
    FlavorComponent
  ],
  imports: [
    CommonModule,
    SaborRoutingModule,
    SharedModule
  ]
})
export class SaborModule { }
