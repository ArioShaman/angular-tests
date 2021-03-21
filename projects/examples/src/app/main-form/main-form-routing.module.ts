import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutView } from './views/layout/layout.view';
import { PersonalInfoContainer } from './containers/personal-info/personal-info.container';
import { ContactInfoContainer } from './containers/contact-info/contact-info.container';
import { SettingsContainer } from './containers/settings/settings.container';

const routes: Routes = [
  {
    path: '',
    component: LayoutView,
    children: [
      {
        path: '',
        redirectTo: 'personal-info',
        pathMatch: 'full'
      },
      {
        path: 'personal-info',
        component: PersonalInfoContainer
      },
      {
        path: 'contact-info',
        component: ContactInfoContainer
      },
      {
        path: 'settings',
        component: SettingsContainer
      }
    ]
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
export class MainFormRoutingModule { }
