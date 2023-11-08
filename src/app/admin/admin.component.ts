import { Component } from '@angular/core';
import { IMenuItems } from './menu/menu.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  menu: IMenuItems[] = [
    { icon: 'group', link: 'users' },
    { icon: 'table_chart', link: 'reports' },
  ];

}
