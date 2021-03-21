import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  ControlContainer,
} from '@angular/forms';
import { TuiCountryIsoCode } from '@taiga-ui/kit';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.container.html',
  styleUrls: ['./contact-info.container.scss']
})
export class ContactInfoContainer implements OnInit {
  public contactInfoGroup: FormGroup;
  public readonly countries: ReadonlyArray<TuiCountryIsoCode> = [
    TuiCountryIsoCode.RU,
    TuiCountryIsoCode.KZ,
    TuiCountryIsoCode.UA,
    TuiCountryIsoCode.BY,
  ];
  public countryIsoCode = TuiCountryIsoCode.RU;

  constructor(
    private readonly _controlContainer: ControlContainer
  ) { }

  ngOnInit(): void {
    this._initForm();
  }

  private _initForm(): void {
    this.contactInfoGroup = this._controlContainer.control.get('contactInfo') as FormGroup;
  }
}
