import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { FlavorComponent } from './components/flavor/flavor.component';
import { SyrupComponent } from './components/syrup/syrup.component';
import { ToppingComponent } from './components/topping/topping.component';
import { FrutaComponent } from './components/fruta/fruta.component';
import { ToppingSalComponent } from './components/topping-sal/topping-sal.component';

import { SaboresContainer } from './containers/sabores/sabores.container';
import { SyrupsContainer } from './containers/syrups/syrups.container';
import { ToppingsContainer } from './containers/toppings/toppings.container';
import { FrutasContainer } from './containers/frutas/frutas.container';
import { ToppingsSalContainer } from './containers/toppings-sal/toppings-sal.container';

@NgModule({
  declarations: [
    FlavorComponent,
    SyrupComponent,
    ToppingComponent,
    FrutaComponent,
    ToppingSalComponent,
    SaboresContainer,
    SyrupsContainer,
    ToppingsContainer,
    FrutasContainer,
    ToppingsSalContainer
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  entryComponents: [
    SaboresContainer
  ]
})
export class IngredientsModule { }
