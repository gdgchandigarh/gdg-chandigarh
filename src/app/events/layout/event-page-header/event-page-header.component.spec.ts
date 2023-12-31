import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPageHeaderComponent } from './event-page-header.component';

describe('EventPageHeaderComponent', () => {
  let component: EventPageHeaderComponent;
  let fixture: ComponentFixture<EventPageHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventPageHeaderComponent]
    });
    fixture = TestBed.createComponent(EventPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
