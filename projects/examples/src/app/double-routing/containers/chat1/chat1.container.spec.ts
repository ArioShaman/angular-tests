import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chat1Container } from './chat1.container';

describe('Chat1Container', () => {
  let component: Chat1Container;
  let fixture: ComponentFixture<Chat1Container>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chat1Container ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chat1Container);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
