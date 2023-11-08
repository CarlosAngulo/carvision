import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface IDropDownOption {
  text: string,
  value: string | number | boolean | null,
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() selectedOption!: string | number | boolean | null;
  @Input() items!: IDropDownOption[];
  @Output() onSelectedItem: EventEmitter<IDropDownOption> = new EventEmitter();
  filterdItems!: IDropDownOption[];
  itemIndexHover: number = -1;
  outputText = 'Select an option';
  open = false;

  @Input() set legend (value: string | IDropDownOption) {
    if (typeof(value) === 'string') {
      this.outputText = value;
      return
    }
    this.outputText = value.text;
  };

  ngOnInit(): void {
    this.filterdItems = this.items;

    if (this.selectedOption) {
      this.itemIndexHover = this.items.findIndex((item) => item.value === this.selectedOption);
      if (this.itemIndexHover > -1) {
        this.onItemClick(this.itemIndexHover);
      }
    }
  }

  onItemClick(index: number): void {
    console.log(index, this.legend, this.filterdItems, this.filterdItems[index])
    this.onSelectedItem.emit(this.filterdItems[index]);
    this.open = false;
    this.legend = this.filterdItems[index].text;
  }

  onDropDown() {
    this.open = !this.open;
  }

  onInputChange(event: Event): void {
    this.open = true;
    const textoInput = (event.target as HTMLInputElement).value.toLocaleLowerCase();
    this.filterdItems = this.items.filter((item) => item.text.toLocaleLowerCase().includes(textoInput));
    if (this.filterdItems.length === 1) {
      this.itemIndexHover = 0;
      this.legend = this.filterdItems[this.itemIndexHover].text;
    }
  }

  onHoverOption(index: number ) {
    this.legend = this.filterdItems[index].text;
  }

  onKeyDown(event:KeyboardEvent) {
    if (event.key === 'ArrowDown') {
      if (!this.open) {
        this.open = true;
        return;
      }
      this.itemIndexHover ++;
      if(this.itemIndexHover >= this.filterdItems.length ) {
        this.itemIndexHover = 0;
      }
      this.legend = this.filterdItems[this.itemIndexHover].text;
    }

    if (event.key === 'ArrowUp') {
      if (!this.open) {
        this.open = true;
        return;
      }
      this.itemIndexHover --;
      if (this.itemIndexHover < 0) {
        this.itemIndexHover = this.filterdItems.length - 1
      }
      this.legend = this.filterdItems[this.itemIndexHover].text;
    }

    if (
      event.key === 'Enter'
      && this.itemIndexHover < this.filterdItems.length
      && this.itemIndexHover >= 0
    ) {
      this.onItemClick(this.itemIndexHover);
    }
  }

  onItemHover(event:MouseEvent, index: number): void {
    this.itemIndexHover = index;
  }

}
