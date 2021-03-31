import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { IOperation } from '../../interfaces';


@Component({
  selector: 'app-operation-element',
  templateUrl: './operation-element.component.html',
  styleUrls: ['./operation-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OperationElementComponent implements OnInit {

  @Input()
  public operation: IOperation;

  constructor() { }

  ngOnInit(): void {
  }

}
