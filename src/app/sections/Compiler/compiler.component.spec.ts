import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compiler } from './compiler.component';

describe('AnOwnProgrammingLanguageComponent', () => {
  let component: Compiler;
  let fixture: ComponentFixture<Compiler>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Compiler ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Compiler);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
