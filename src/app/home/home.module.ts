import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { ProductsContainer } from './containers/products/products.container';
import { ProductComponent } from './components/product/product.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';

@NgModule({
    declarations: [
        ProductsContainer,
        ProductComponent,
        HomeComponent
    ],
    imports: [
               CommonModule,
               HomeRoutingModule,
               SharedModule,
               MaterialModule
            ],
    exports: [],
    providers: [],
})
export class HomeModule {}
