import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfNodeComponent } from './if-node.component';

describe('IfNodeComponent', () => {
  let component: IfNodeComponent;
  let fixture: ComponentFixture<IfNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfNodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IfNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
