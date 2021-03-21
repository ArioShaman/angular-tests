import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.view.html',
  styleUrls: ['./layout.view.scss']
})
export class LayoutView implements OnInit {
  public mainForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this._initFrom();
  }

  public onSubmit(formValue: any): void {
    console.log(formValue);
  }

  private _initFrom(): void {
    const personalInfoGroup = this._formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      middleName: [null, Validators.required]
    });

    const contactInfoGroup = this._formBuilder.group({
      phone: [null, Validators.required],
      email: [null, Validators.required]
    });

    const settingsGroup = this._formBuilder.group({
      turnedNotification: [true],
      colorScheme: [true]
    });

    this.mainForm = this._formBuilder.group({
      personalInfo: personalInfoGroup,
      contactInfo: contactInfoGroup,
      settings: settingsGroup
    });

    console.log(this.mainForm);
  }
}
