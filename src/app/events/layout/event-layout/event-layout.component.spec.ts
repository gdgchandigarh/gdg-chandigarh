import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventLayoutComponent } from './event-layout.component';

describe('EventLayoutComponent', () => {
  let component: EventLayoutComponent;
  let fixture: ComponentFixture<EventLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventLayoutComponent]
    });
    fixture = TestBed.createComponent(EventLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
