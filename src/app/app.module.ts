import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product.component';
import { CartComponent } from './cart/cart.component';
import { HighlightDirective } from './highlight.directive';
import { HomeComponent } from './home/home.component';
import { TypeProductsComponent } from './type-products/type-products.component';
import { ContactComponent } from './contact/contact.component';
import { IceproductsComponent } from './iceproducts/iceproducts.component';
import { SaboresComponent } from './sabores/sabores.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    HighlightDirective,
    HomeComponent,
    TypeProductsComponent,
    ContactComponent,
    IceproductsComponent,
    SaboresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
