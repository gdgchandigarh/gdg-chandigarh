import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeSectionComponent } from './youtube-section.component';

describe('YoutubeSectionComponent', () => {
  let component: YoutubeSectionComponent;
  let fixture: ComponentFixture<YoutubeSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YoutubeSectionComponent]
    });
    fixture = TestBed.createComponent(YoutubeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
