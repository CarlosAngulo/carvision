import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { MenuComponent } from './menu/menu.component';
import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './users/users.component';
import { ReportsComponent } from './reports/reports.component';
import { SharedModule } from '../shared/shared.module';
import { UsersService } from './users/infraestructure/users.service';
import { UsersGateway } from './users/domain/users-gateway';
import { NewComponent } from './users/new-user/new-user.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent,
    MenuComponent,
    UsersComponent,
    ReportsComponent,
    NewComponent
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    {
      provide: UsersGateway,
      useClass: UsersService
    }
  ]
})
export class AdminModule { }
