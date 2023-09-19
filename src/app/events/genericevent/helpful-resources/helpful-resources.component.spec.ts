import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpfulResourcesComponent } from './helpful-resources.component';

describe('HelpfulResourcesComponent', () => {
  let component: HelpfulResourcesComponent;
  let fixture: ComponentFixture<HelpfulResourcesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelpfulResourcesComponent]
    });
    fixture = TestBed.createComponent(HelpfulResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
