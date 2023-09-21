import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateCounterComponent } from './date-counter.component';

describe('DateCounterComponent', () => {
  let component: DateCounterComponent;
  let fixture: ComponentFixture<DateCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DateCounterComponent]
    });
    fixture = TestBed.createComponent(DateCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
