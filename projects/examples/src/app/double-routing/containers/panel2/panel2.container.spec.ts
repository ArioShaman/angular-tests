import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Panel2Container } from './panel2.container';

describe('Panel2Container', () => {
  let component: Panel2Container;
  let fixture: ComponentFixture<Panel2Container>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Panel2Container ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Panel2Container);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
