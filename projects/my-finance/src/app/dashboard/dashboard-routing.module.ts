import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboadView } from './views/dashboad/dashboad.view';

const routes: Routes = [
  {
    path: '',
    component: DashboadView
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
