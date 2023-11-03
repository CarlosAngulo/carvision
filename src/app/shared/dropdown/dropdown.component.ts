import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface IDropDownOption {
  text: string,
  value: string | number | boolean | null,
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() items!: IDropDownOption[];
  @Output() onSelectedItem: EventEmitter<IDropDownOption> = new EventEmitter();
  defaulText = 'Select an option';
  open = false;

  @Input() set legend (value: string | IDropDownOption) {
    if (typeof(value) === 'string') {
      this.defaulText = value;
      return
    }
    this.defaulText = value.text;
  };

  onItemClick(index: number): void {
    this.onSelectedItem.emit(this.items[index]);
    this.legend = this.items[index].text;
    this.open = false;
  }

  onDropDown() {
    this.open = !this.open;
  }

}
