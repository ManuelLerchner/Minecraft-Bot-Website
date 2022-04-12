import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhileNodeComponent } from './while-node.component';

describe('WhileNodeComponent', () => {
  let component: WhileNodeComponent;
  let fixture: ComponentFixture<WhileNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhileNodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhileNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
