import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { DashboardService } from '../../services/dashboard.service';
import { IOperation } from '../../interfaces';

@UntilDestroy()
@Component({
  selector: 'app-operation-list',
  templateUrl: './operation-list.container.html',
  styleUrls: ['./operation-list.container.scss']
})
export class OperationListContainer implements OnInit {

  public operations$: Observable<IOperation>;

  constructor(
    private readonly _dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.receiveOperations();
  }

  public receiveOperations(): void {
    this.operations$ = this._dashboardService
      .getAllOperations()
      .pipe(
        map((res) => res.data),
        untilDestroyed(this)
      )
  }
}
