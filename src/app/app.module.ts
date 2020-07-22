import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';

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
import { ShakeModule } from './shake/shake.module';
import { BebidaModule } from './bebida/bebida.module';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    IcecreamModule,
    CafeModule,
    BackerieModule,
    SnackModule,
    ShakeModule,
    BebidaModule,
    ContactoModule,
    PageNotFoundModule,
    MaterialModule,
    HttpClientModule,
    NgxAuthFirebaseUIModule.forRoot(
      {
        apiKey: 'AIzaSyAFH2RruwxCO0jx-Fkz18kaBb0AvfQwdS0',
        authDomain: 'helarte-store.firebaseapp.com',
        databaseURL: 'https://helarte-store.firebaseio.com',
        projectId: 'helarte-store',
        storageBucket: 'helarte-store.appspot.com',
        messagingSenderId: '924214414906',
        appId: '1:924214414906:web:1faa33d1bdd2e838c0ef03',
        measurementId: 'G-MN2D01RXJB'
      },
      () => 'HelarteStore',
      {
        enableFirestoreSync: true, // enable/disable autosync users with firestore
        toastMessageOnAuthSuccess: false, // whether to open/show a snackbar message on auth success - default : true
        toastMessageOnAuthError: false, // whether to open/show a snackbar message on auth error - default : true
        authGuardFallbackURL: '/loggedout', // url for unauthenticated users - to use in combination with canActivate feature on a route
        authGuardLoggedInURL: '/loggedin', // url for authenticated users - to use in combination with canActivate feature on a route
        passwordMaxLength: 60, // `min/max` input parameters in components should be within this range.
        passwordMinLength: 8, // Password length min/max in forms independently of each componenet min/max.
        // Same as password but for the name
        nameMaxLength: 50,
        nameMinLength: 2,
        // If set, sign-in/up form is not available until email has been verified.
        // Plus protected routes are still protected even though user is connected.
        guardProtectedRoutesUntilEmailIsVerified: true,
        enableEmailVerification: true, // default: true
      }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
