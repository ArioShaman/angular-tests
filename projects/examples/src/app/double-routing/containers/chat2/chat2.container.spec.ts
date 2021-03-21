import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chat2Container } from './chat2.container';

describe('Chat2Container', () => {
  let component: Chat2Container;
  let fixture: ComponentFixture<Chat2Container>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chat2Container ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chat2Container);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
