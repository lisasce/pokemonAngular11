import { NgModule }       from '@angular/core';
import { RouterModule }   from '@angular/router';
import { AuthService }    from './auth.service';
import { LoginComponent } from "./loginComponent/login.component";
import {AuthGuard} from "./auth.guard";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'login', component: LoginComponent }
        ])
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthGuard,
        AuthService
    ]
})
export class LoginRoutingModule {}
