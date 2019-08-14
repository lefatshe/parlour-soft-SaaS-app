import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/authorization/register/register.component';
import { LoginComponent } from './pages/authorization/login/login.component';
import {AuthModule} from "./auth/auth.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AccountComponent } from './account/account.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PageHeaderComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
