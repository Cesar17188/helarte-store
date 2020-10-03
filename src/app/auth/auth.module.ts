import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SendEmailComponent } from './components/send-email/send-email.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AutentificationComponent } from './components/autentification/autentification.component';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    SendEmailComponent,
    ForgotPasswordComponent,
    PerfilComponent,
    AutentificationComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule
  ]
})
export class AuthModule { }
