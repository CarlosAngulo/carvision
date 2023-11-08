import { Component } from '@angular/core';
import { SupabaseService } from 'src/app/api/infraestructure/supabase/users-supabase.service';
import { IUserData } from 'src/app/shared/user-card/user-card.component';
import { UsersGateway } from './domain/users-gateway';
import { IUserDTO } from 'src/app/auth/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users!: IUserDTO[];
  showCreateUserComponent = false;

  constructor(
    private readonly usersService: UsersGateway
    ) {
    this.loadUsers();
  }

  loadUsers() {
    this.usersService.getAll('sortBy=createdAt:desc').subscribe((res) => {
      this.users = res.results;
    });
  }

  onAddUserClick() {
    this.showCreateUserComponent = true;
  }

  hideAddUser() {
    this.showCreateUserComponent = false; 
  }

  userCreated(event: IUserDTO) {
    this.hideAddUser();
    this.loadUsers();
  }
}
