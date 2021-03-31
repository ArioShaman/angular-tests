import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationListContainer } from './operation-list.container';

describe('OperationListContainer', () => {
  let component: OperationListContainer;
  let fixture: ComponentFixture<OperationListContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationListContainer ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationListContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
