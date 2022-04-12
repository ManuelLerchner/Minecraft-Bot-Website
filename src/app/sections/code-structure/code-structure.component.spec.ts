import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeStructureComponent } from './code-structure.component';

describe('CodeStructureComponent', () => {
  let component: CodeStructureComponent;
  let fixture: ComponentFixture<CodeStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeStructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
