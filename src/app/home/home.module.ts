import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
    declarations: [
        ProductsComponent,
        ProductComponent,
        HomeComponent
    ],
    imports: [ CommonModule,
               HomeRoutingModule,
               SharedModule],
    exports: [],
    providers: [],
})
export class HomeModule {}
