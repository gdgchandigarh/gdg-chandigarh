import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsGdgComponent } from './events-gdg.component';

describe('EventsGdgComponent', () => {
  let component: EventsGdgComponent;
  let fixture: ComponentFixture<EventsGdgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsGdgComponent]
    });
    fixture = TestBed.createComponent(EventsGdgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
