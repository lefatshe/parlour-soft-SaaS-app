import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './pages/authorization/login/login.component';
import {RegisterComponent} from './pages/authorization/register/register.component';
import {HomeComponent} from './pages/home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {DashboardHomeComponent} from './pages/dashboard-home/dashboard-home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  // Auth
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  // Admin
  {
    path: 'account',
    component: DashboardHomeComponent
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
