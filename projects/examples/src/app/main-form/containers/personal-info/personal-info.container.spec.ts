import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInfoContainer } from './personal-info.container';

describe('PersonalInfoContainer', () => {
  let component: PersonalInfoContainer;
  let fixture: ComponentFixture<PersonalInfoContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalInfoContainer ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalInfoContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
