import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  ControlContainer,
} from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.container.html',
  styleUrls: ['./personal-info.container.scss']
})
export class PersonalInfoContainer implements OnInit {

  public personalInfoGroup: FormGroup;

  constructor(
    private readonly _controlContainer: ControlContainer
  ) { }

  ngOnInit(): void {
    this._initForm();
  }
  
  private _initForm(): void {
    this.personalInfoGroup = this._controlContainer.control.get('personalInfo') as FormGroup;
  }

}
