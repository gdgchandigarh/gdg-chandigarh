import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAgendaComponent } from './event-agenda.component';

describe('EventAgendaComponent', () => {
  let component: EventAgendaComponent;
  let fixture: ComponentFixture<EventAgendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventAgendaComponent]
    });
    fixture = TestBed.createComponent(EventAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
