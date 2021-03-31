import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationElementComponent } from './operation-element.component';

describe('OperationElementComponent', () => {
  let component: OperationElementComponent;
  let fixture: ComponentFixture<OperationElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
