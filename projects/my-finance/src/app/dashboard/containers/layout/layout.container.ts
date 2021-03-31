import { Component, OnInit } from '@angular/core';

import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './layout.container.html',
  styleUrls: ['./layout.container.scss']
})
export class LayoutContainer implements OnInit {

  constructor(
    private readonly _dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
  }



}
