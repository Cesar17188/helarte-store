import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlavorComponent } from './components/flavor/flavor.component';
import { SaboresComponent } from './components/sabores/sabores.component';

import { SyrupsComponent } from './components/syrups/syrups.component';
import { SyrupComponent } from './components/syrup/syrup.component';
import { ToppingComponent } from './components/topping/topping.component';
import { ToppingsComponent } from './components/toppings/toppings.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    FlavorComponent,
    SaboresComponent,
    SyrupsComponent,
    SyrupComponent,
    ToppingComponent,
    ToppingsComponent
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
