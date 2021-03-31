import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
	
import {
  TuiContextWithImplicit,
  tuiPure,
  TuiStringHandler
} from '@taiga-ui/cdk';

@Component({
  selector: 'app-operation-filter',
  templateUrl: './operation-filter.component.html',
  styleUrls: ['./operation-filter.component.scss']
})
export class OperationFilterComponent implements OnInit {

  public filterForm: FormGroup;
  public sortValues = [
    {
      'key': 'desc',
      'value': 'Descending'
    },
    {
      'key': 'asc',
      'value': 'Ascending'
    }
  ];

  public sortKindValues = [
    {
      'key': 'description',
      'value': 'Name'
    },
    {
      'key': 'date',
      'value': 'Date'
    },
    {
      'key': 'summ',
      'value': 'Operation summ'
    }
  ];

  public periodValues = [
    {
      'key': 'all',
      'value': 'For the all period'
    },
    {
      'key': 'week',
      'value': 'For the last week'
    },
    {
      'key': 'month',
      'value': 'For the last month'
    },
  ];

  constructor(
    private readonly _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this._initForm();
    this._patchForm();

    this.filterForm.valueChanges
      .subscribe((res) => {
        console.log(res);
      })
  }

  @tuiPure
  stringify(
    items: ReadonlyArray<any>,
  ): TuiStringHandler<TuiContextWithImplicit<string>> {
      const map = new Map(items.map(({key, value}) => [key, value] as [string, string]));

      return ({$implicit}: TuiContextWithImplicit<string>) => map.get($implicit) || '';
  }

  private _initForm(): void {
    this.filterForm = this._formBuilder.group({
      sort: [null],
      sortKind: [null],
      period: [null],
      companyName: [null],
    });
  }

  private _patchForm(): void {
    this.filterForm.patchValue({
      sort: this.sortValues[0].key,
      sortKind: this.sortKindValues[0].key,
      period: this.periodValues[0].key,
    })
  }

}
