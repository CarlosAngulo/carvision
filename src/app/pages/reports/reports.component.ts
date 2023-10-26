import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/operators';
import { ReportsGateway } from 'src/app/api/domain/reports-gateway';
import { SalesGateway } from 'src/app/api/domain/sales-gateway';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit, OnDestroy {
  
  private unsub$ = new Subject<void>();

  constructor (
    private reportsApi: ReportsGateway,
    private salesApi: SalesGateway
  ) {}

  ngOnInit() {
    this.salesApi.getAll()
    .pipe(takeUntil(this.unsub$))
    .subscribe(res => console.log(res))
  }

  ngOnDestroy() {
    this.unsub$.next();
    this.unsub$.unsubscribe();
  }
  
}
