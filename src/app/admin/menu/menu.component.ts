import { Component, Input, OnInit } from '@angular/core';

export interface IMenuItems {
  text?: string,
  link: string,
  icon?: string,
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Input() items!: IMenuItems[]

  constructor() {}
}
