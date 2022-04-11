import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsAStateMachineComponent } from './what-is-a-state-machine.component';

describe('WhatIsAStateMachineComponent', () => {
  let component: WhatIsAStateMachineComponent;
  let fixture: ComponentFixture<WhatIsAStateMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatIsAStateMachineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsAStateMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
