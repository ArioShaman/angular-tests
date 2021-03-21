import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  ControlContainer,
} from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.container.html',
  styleUrls: ['./settings.container.scss']
})
export class SettingsContainer implements OnInit {

  public settingsGroup: FormGroup;

  constructor(
    private readonly _controlContainer: ControlContainer
  ) { }

  ngOnInit(): void {
    this._initForm();
  }

  private _initForm(): void {
    this.settingsGroup = this._controlContainer.control.get('settings') as FormGroup;
  }

}
