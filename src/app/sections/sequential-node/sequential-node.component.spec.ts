import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SequentialNodeComponent } from './sequential-node.component';

describe('SequentialNodeComponent', () => {
  let component: SequentialNodeComponent;
  let fixture: ComponentFixture<SequentialNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SequentialNodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SequentialNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
