import { Component } from '@angular/core';
import { SupabaseService } from 'src/app/api/infraestructure/supabase/users-supabase.service';
import { IUserData } from 'src/app/shared/user-card/user-card.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users: IUserData[] = [
    {
      name: 'Mary Lebowski',
      location: 'San Diego, CA',
      role: 'seller',
      score: 10
    },
    {
      name: 'Adm',
      location: 'San Diego, CA',
      role: 'admn',
      score: 10
    }
  ]

  constructor(private readonly supabase: SupabaseService) {
    supabase.getAll().then((res) => console.log(res))
  }
}
