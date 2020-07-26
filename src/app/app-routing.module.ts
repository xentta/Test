import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './admin/login/login.component';
import {RegistrationComponent} from './admin/registration/registration.component';

import {RegistrationSuccessComponent} from './admin/registration-success/registration-success.component';
import {PersonalAccountComponent} from './personal-account/personal-account.component';


const routes: Routes = [
    {path: '', component: RegistrationComponent},
    {path: 'login', component: LoginComponent},
    {path: 'personal-acc', component: PersonalAccountComponent},
    {path: 'registration-success', component: RegistrationSuccessComponent}
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
