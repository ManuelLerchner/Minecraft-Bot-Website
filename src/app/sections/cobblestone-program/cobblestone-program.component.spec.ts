import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CobblestoneProgramComponent } from './cobblestone-program.component';

describe('CobblestoneProgramComponent', () => {
  let component: CobblestoneProgramComponent;
  let fixture: ComponentFixture<CobblestoneProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CobblestoneProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CobblestoneProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
