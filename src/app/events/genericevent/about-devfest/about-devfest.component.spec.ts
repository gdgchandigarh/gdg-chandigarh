import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDevfestComponent } from './about-devfest.component';

describe('AboutDevfestComponent', () => {
  let component: AboutDevfestComponent;
  let fixture: ComponentFixture<AboutDevfestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutDevfestComponent]
    });
    fixture = TestBed.createComponent(AboutDevfestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
