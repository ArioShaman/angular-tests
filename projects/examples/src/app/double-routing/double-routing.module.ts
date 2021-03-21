import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoubleRoutingRoutingModule } from './double-routing-routing.module';
import { LayoutView } from './views/layout/layout.view';
import { Chat1Container } from './containers/chat1/chat1.container';
import { Chat2Container } from './containers/chat2/chat2.container';
import { Panel1Container } from './containers/panel1/panel1.container';
import { Panel2Container } from './containers/panel2/panel2.container';


@NgModule({
  declarations: [
    LayoutView,
    Chat1Container,
    Chat2Container,
    Panel1Container,
    Panel2Container
  ],
  imports: [
    CommonModule,
    DoubleRoutingRoutingModule
  ]
})
export class DoubleRoutingModule { }
