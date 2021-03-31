import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardService } from './services/dashboard.service';
import { DashboadView } from './views/dashboad/dashboad.view';
import { LayoutContainer } from './containers/layout/layout.container';
import { OperationListContainer } from './containers/operation-list/operation-list.container';
import { OperationElementComponent } from './components/operation-element/operation-element.component';
import { CoreModule } from '../core/core.module';
import { OperationFilterComponent } from './components/operation-filter/operation-filter.component';


@NgModule({
  declarations: [
    DashboadView,
    LayoutContainer,
    OperationListContainer,
    OperationElementComponent,
    OperationFilterComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    DashboardService
  ]
})
export class DashboardModule { }
