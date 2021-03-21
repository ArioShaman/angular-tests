import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { TuiRootModule } from '@taiga-ui/core';
import { 
  TuiInputModule,
  TuiInputPhoneInternationalModule,
  TuiToggleModule,
} from '@taiga-ui/kit';
import { TuiButtonModule } from '@taiga-ui/core';

import { MainFormRoutingModule } from './main-form-routing.module';
import { LayoutView } from './views/layout/layout.view';
import { PersonalInfoContainer } from './containers/personal-info/personal-info.container';
import { ContactInfoContainer } from './containers/contact-info/contact-info.container';
import { SettingsContainer } from './containers/settings/settings.container';

@NgModule({
  declarations: [
    LayoutView,
    PersonalInfoContainer,
    ContactInfoContainer,
    SettingsContainer
  ],
  imports: [
    CommonModule,
    MainFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TuiRootModule,
    TuiInputModule,
    TuiInputPhoneInternationalModule,
    TuiToggleModule,
    TuiButtonModule
  ]
})
export class MainFormModule { }
