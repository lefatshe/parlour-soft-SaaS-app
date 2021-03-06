import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account.routing.module';
import {AccountHeaderComponent} from "./header/header.component";


@NgModule({
  declarations: [AccountComponent, AccountHeaderComponent],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
