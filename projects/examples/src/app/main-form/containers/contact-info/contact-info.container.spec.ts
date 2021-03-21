import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInfoContainer } from './contact-info.container';

describe('ContactInfoContainer', () => {
  let component: ContactInfoContainer;
  let fixture: ComponentFixture<ContactInfoContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactInfoContainer ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactInfoContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
