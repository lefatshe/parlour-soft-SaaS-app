import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountComponent} from './account.component';
import {AccountRoutingModule} from './account.routing.module';
import {AccountHeaderComponent} from "./header/header.component";
import {DashboardComponent} from "./dashboard/dashboard.component";


@NgModule({
  declarations: [AccountComponent, AccountHeaderComponent, DashboardComponent],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule {
}
