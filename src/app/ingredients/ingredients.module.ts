import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlavorComponent } from './components/flavor/flavor.component';
import { SaboresComponent } from './components/sabores/sabores.component';

import { SyrupsComponent } from './components/syrups/syrups.component';
import { SyrupComponent } from './components/syrup/syrup.component';
import { ToppingComponent } from './components/topping/topping.component';
import { ToppingsComponent } from './components/toppings/toppings.component';
import { MaterialModule } from '../material/material.module';
import { FrutasComponent } from './components/frutas/frutas.component';
import { FrutaComponent } from './components/fruta/fruta.component';
import { ToppingSalComponent } from './components/topping-sal/topping-sal.component';
import { ToppingsSalComponent } from './components/toppings-sal/toppings-sal.component';

@NgModule({
  declarations: [
    FlavorComponent,
    SaboresComponent,
    SyrupsComponent,
    SyrupComponent,
    ToppingComponent,
    ToppingsComponent,
    FrutasComponent,
    FrutaComponent,
    ToppingSalComponent,
    ToppingsSalComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  entryComponents: [
    SaboresComponent
  ]
})
export class IngredientsModule { }
