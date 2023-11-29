import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallForSpeakerComponent } from './call-for-speaker.component';

describe('CallForSpeakerComponent', () => {
  let component: CallForSpeakerComponent;
  let fixture: ComponentFixture<CallForSpeakerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CallForSpeakerComponent]
    });
    fixture = TestBed.createComponent(CallForSpeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
