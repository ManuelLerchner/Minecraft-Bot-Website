import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryNodeComponent } from './try-node.component';

describe('TryNodeComponent', () => {
  let component: TryNodeComponent;
  let fixture: ComponentFixture<TryNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TryNodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TryNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
