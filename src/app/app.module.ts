import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { IceproductsComponent } from './iceproducts/iceproducts.component';
import { SaboresComponent } from './sabores/sabores.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IcecreamDetailComponent } from './icecream-detail/icecream-detail.component';
import { HeladosComponent } from './components/helados/helados.component';
import { BackeriesComponent } from './components/backeries/backeries.component';
import { BackeriesproductsComponent } from './backeriesproducts/backeriesproducts.component';
import { CafesproductsComponent } from './cafesproducts/cafesproducts.component';
import { CafesComponent } from './components/cafes/cafes.component';
import { SnacksComponent } from './components/snacks/snacks.component';
import { SnacksproductsComponent } from './snacksproducts/snacksproducts.component';
import { LayoutComponent } from './layout/layout.component';
import { FlavorComponent } from './components/flavor/flavor.component';


import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ContactComponent,
    IceproductsComponent,
    SaboresComponent,
    PageNotFoundComponent,
    IcecreamDetailComponent,
    HeladosComponent,
    BackeriesComponent,
    BackeriesproductsComponent,
    CafesproductsComponent,
    CafesComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
