import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTeamComponent } from './event-team.component';

describe('EventTeamComponent', () => {
  let component: EventTeamComponent;
  let fixture: ComponentFixture<EventTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventTeamComponent]
    });
    fixture = TestBed.createComponent(EventTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
