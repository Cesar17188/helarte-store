import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { IcecreamModule } from './icecream/icecream.module';
import { CafeModule } from './cafe/cafe.module';
import { BackerieModule } from './backerie/backerie.module';
import { SnackModule } from './snack/snack.module';
import { ContactoModule } from './contacto/contacto.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,

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
    BackerieModule,
    SnackModule,
    ContactoModule,
    PageNotFoundModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
