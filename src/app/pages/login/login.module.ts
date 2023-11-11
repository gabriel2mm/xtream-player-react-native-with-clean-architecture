import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { PagesModule } from '@pages/pages.module';
import { LoginRoutingModule } from './login-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    declarations: [LoginComponent],
    imports: [LoginRoutingModule, PagesModule, MatSnackBarModule],
    exports: [LoginComponent]
})
export class LoginModule { }
