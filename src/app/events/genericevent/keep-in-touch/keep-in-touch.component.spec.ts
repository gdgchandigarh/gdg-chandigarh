import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeepInTouchComponent } from './keep-in-touch.component';

describe('KeepInTouchComponent', () => {
  let component: KeepInTouchComponent;
  let fixture: ComponentFixture<KeepInTouchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeepInTouchComponent]
    });
    fixture = TestBed.createComponent(KeepInTouchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
