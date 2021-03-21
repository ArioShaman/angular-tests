import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Panel1Container } from './panel1.container';

describe('Panel1Container', () => {
  let component: Panel1Container;
  let fixture: ComponentFixture<Panel1Container>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Panel1Container ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Panel1Container);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
