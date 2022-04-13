import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodProgramComponent } from './wood-program.component';

describe('WoodProgramComponent', () => {
  let component: WoodProgramComponent;
  let fixture: ComponentFixture<WoodProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoodProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoodProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
