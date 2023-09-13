import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFaqComponent } from './event-faq.component';

describe('EventFaqComponent', () => {
  let component: EventFaqComponent;
  let fixture: ComponentFixture<EventFaqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventFaqComponent]
    });
    fixture = TestBed.createComponent(EventFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
