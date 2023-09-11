import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatToExpectComponent } from './what-to-expect.component';

describe('WhatToExpectComponent', () => {
  let component: WhatToExpectComponent;
  let fixture: ComponentFixture<WhatToExpectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatToExpectComponent]
    });
    fixture = TestBed.createComponent(WhatToExpectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
