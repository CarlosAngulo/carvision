import { Component, Input } from '@angular/core';

export interface IUserData {
  name: string;
  role: string;
  location: string;
  score: number;
}

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() user!: IUserData;

}
