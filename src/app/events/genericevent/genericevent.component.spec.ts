import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericeventComponent } from './genericevent.component';

describe('GenericeventComponent', () => {
  let component: GenericeventComponent;
  let fixture: ComponentFixture<GenericeventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenericeventComponent]
    });
    fixture = TestBed.createComponent(GenericeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
