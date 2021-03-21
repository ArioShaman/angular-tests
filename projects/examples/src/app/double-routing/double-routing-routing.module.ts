import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutView } from './views/layout/layout.view';
import { Chat1Container } from './containers/chat1/chat1.container';
import { Chat2Container } from './containers/chat2/chat2.container';
import { Panel1Container } from './containers/panel1/panel1.container';
import { Panel2Container } from './containers/panel2/panel2.container';

const routes: Routes = [
  {
    path: '',
    component: LayoutView,
    children: [
      {
        path: '',
        redirectTo: 'first-chat',
      },
      {
        path: 'first-chat',
        component: Chat1Container,
      },
      {
        path: '',
        redirectTo: 'first-panel',
        outlet: 'panel-outlet'
      },
      {
        path: 'first-panel',
        component: Panel1Container,
        outlet: 'panel-outlet'
      },
      {
        path: 'second-panel',
        component: Panel2Container,
        outlet: 'panel-outlet'
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DoubleRoutingRoutingModule { }
