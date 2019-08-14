import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent
=======
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/authorization/register/register.component';
import { LoginComponent } from './pages/authorization/login/login.component';
import { DashboardHomeComponent } from './pages/dashboard-home/dashboard-home.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PageHeaderComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    DashboardHomeComponent
>>>>>>> develop
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
