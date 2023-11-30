import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevfestPreloaderComponent } from './devfest-preloader.component';

describe('DevfestPreloaderComponent', () => {
  let component: DevfestPreloaderComponent;
  let fixture: ComponentFixture<DevfestPreloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevfestPreloaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevfestPreloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
