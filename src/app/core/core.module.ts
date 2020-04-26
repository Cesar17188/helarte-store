import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsService } from './services/products/products.service';
import { BackeriesService } from './services/backeries/backeries.service';
import { CafesService } from './services/cafes/cafes.service';
import { HeladosService } from './services/helados/helados.service';
import { SaboresService } from './services/sabores/sabores.service';
import { SnacksService } from './services/snacks/snacks.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ProductsService,
    BackeriesService,
    CafesService,
    HeladosService,
    SaboresService,
    SnacksService
  ]
})
export class CoreModule { }
