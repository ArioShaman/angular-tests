import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboadView } from './dashboad.view';

describe('DashboadView', () => {
  let component: DashboadView;
  let fixture: ComponentFixture<DashboadView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboadView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboadView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
