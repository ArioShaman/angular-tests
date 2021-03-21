import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutView } from './views/layout/layout.view';

const routes: Routes = [
  {
    path: '',
    component: LayoutView
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoubleRoutingRoutingModule { }
