import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutGdgComponent } from './about-gdg.component';

describe('AboutGdgComponent', () => {
  let component: AboutGdgComponent;
  let fixture: ComponentFixture<AboutGdgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutGdgComponent]
    });
    fixture = TestBed.createComponent(AboutGdgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
