import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './containers/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {RouterModule} from '@angular/router';
// import { MatButtonModule} from '@angular/material';
import {AuthGuard} from './guards/auth.guard';
import {AuthService} from './services/auth.service';
import {TokenInterceptor} from './token.interceptor';
import {RegisterComponent} from "./containers/register/register.component";
import {HeaderComponent} from "./containers/header/header.component";
import {AuthSharedService} from "./services/shared.service";

@NgModule({
  declarations: [LoginComponent, RegisterComponent, HeaderComponent],
  providers: [
    AuthGuard,
    AuthService,
    AuthSharedService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    // MatButtonModule,
  ]
})
export class AuthModule {
}
