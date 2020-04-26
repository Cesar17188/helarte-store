import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './components/contact/contact.component';

import { ContactoRoutingModule } from './contacto-routing.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    SharedModule
  ]
})
export class ContactoModule { }
