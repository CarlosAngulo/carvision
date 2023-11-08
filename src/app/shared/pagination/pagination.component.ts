import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  pageList!: number[];
  @Output() onPageChange = new EventEmitter<number>();
  @Input() currentPage = 1;
  @Input() set pages (val: number) {
    this.pageList = Array(val)
      .fill(0, 0, val)
      .map((x,i)=>  i + 1 );
  }

  onPageClick(page: number) {
    this.onPageChange.emit(page)
  }

}
