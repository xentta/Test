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
import { FormContactComponent } from './personal-account/form-contact/form-contact.component';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    RegistrationSuccessComponent,
    ContactComponent,
    PersonalAccountComponent,
    FormContactComponent,
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

