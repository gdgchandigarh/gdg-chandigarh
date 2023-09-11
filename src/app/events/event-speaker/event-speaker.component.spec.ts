import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSpeakerComponent } from './event-speaker.component';

describe('EventSpeakerComponent', () => {
  let component: EventSpeakerComponent;
  let fixture: ComponentFixture<EventSpeakerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventSpeakerComponent]
    });
    fixture = TestBed.createComponent(EventSpeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
