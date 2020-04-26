import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { SaboresComponent } from './sabores/sabores.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SnacksComponent } from './components/snacks/snacks.component';
import { SnacksproductsComponent } from './snacksproducts/snacksproducts.component';
import { LayoutComponent } from './layout/layout.component';
import { FlavorComponent } from './components/flavor/flavor.component';


import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { IcecreamModule } from './icecream/icecream.module';
import { CafeModule } from './cafe/cafe.module';
import { BackerieModule } from './backerie/backerie.module';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ContactComponent,
    SaboresComponent,
    PageNotFoundComponent,
    SnacksComponent,
    SnacksproductsComponent,
    LayoutComponent,
    FlavorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    IcecreamModule,
    CafeModule,
    BackerieModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
