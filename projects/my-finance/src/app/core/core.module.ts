import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TuiRootModule } from '@taiga-ui/core';
import { 
  TuiInputModule,
  TuiInputPhoneInternationalModule,
  TuiToggleModule,
  TuiBadgeModule,
  TuiMarkerIconModule,
  TuiDataListWrapperModule,
  TuiSelectModule
} from '@taiga-ui/kit';
import { 
  TuiButtonModule,
  TuiSvgModule,
  TuiDataListModule
} from '@taiga-ui/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TuiRootModule,
    TuiInputModule,
    TuiInputPhoneInternationalModule,
    TuiToggleModule,
    TuiButtonModule,
    TuiBadgeModule,
    TuiSvgModule,
    TuiMarkerIconModule,
    TuiDataListWrapperModule,
    TuiSelectModule,
    TuiDataListModule
  ],
  exports: [
    TuiRootModule,
    TuiInputModule,
    TuiInputPhoneInternationalModule,
    TuiToggleModule,
    TuiButtonModule,
    TuiBadgeModule,
    TuiSvgModule,
    TuiMarkerIconModule,
    TuiDataListWrapperModule,
    TuiSelectModule,
    TuiDataListModule
  ],
  providers: []
})
export class CoreModule { }
