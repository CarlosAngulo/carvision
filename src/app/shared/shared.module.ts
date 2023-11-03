import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './user-card/user-card.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    UserCardComponent,
    DropdownComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserCardComponent,
    DropdownComponent,
    PaginationComponent
  ]
})
export class SharedModule { }
