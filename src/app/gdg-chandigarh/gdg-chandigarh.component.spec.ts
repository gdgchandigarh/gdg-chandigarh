import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdgChandigarhComponent } from './gdg-chandigarh.component';

describe('GdgChandigarhComponent', () => {
  let component: GdgChandigarhComponent;
  let fixture: ComponentFixture<GdgChandigarhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GdgChandigarhComponent]
    });
    fixture = TestBed.createComponent(GdgChandigarhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
