import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoubleRoutingRoutingModule } from './double-routing-routing.module';
import { LayoutView } from './views/layout/layout.view';


@NgModule({
  declarations: [
    LayoutView
  ],
  imports: [
    CommonModule,
    DoubleRoutingRoutingModule
  ]
})
export class DoubleRoutingModule { }
