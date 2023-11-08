import { Component, Input } from '@angular/core';
import { IUserDTO } from 'src/app/auth/models/user.model';

export interface IUserData {
  name: string;
  role: string;
  location: string;
  email: string;
  id: string
}

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() user!: IUserDTO;

}
