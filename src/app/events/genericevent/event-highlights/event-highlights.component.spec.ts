import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventHighlightsComponent } from './event-highlights.component';

describe('EventHighlightsComponent', () => {
  let component: EventHighlightsComponent;
  let fixture: ComponentFixture<EventHighlightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventHighlightsComponent]
    });
    fixture = TestBed.createComponent(EventHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
