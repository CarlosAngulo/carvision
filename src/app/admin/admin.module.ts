import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { MenuComponent } from './menu/menu.component';
import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './users/users.component';
import { ReportsComponent } from './reports/reports.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AdminComponent,
    MenuComponent,
    UsersComponent,
    ReportsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
