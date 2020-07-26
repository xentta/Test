import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './admin/login/login.component';
import {RegistrationComponent} from './admin/registration/registration.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { RegistrationSuccessComponent } from './admin/registration-success/registration-success.component';
import { ContactComponent } from './Personal-account/contact/contact.component';
import { PersonalAccountComponent } from './personal-account/personal-account.component';
import { FotmContactComponent } from './personal-account/fotm-contact/fotm-contact.component';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    RegistrationSuccessComponent,
    ContactComponent,
    PersonalAccountComponent,
    FotmContactComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

