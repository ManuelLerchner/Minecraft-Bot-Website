import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnOwnProgrammingLanguageComponent } from './an-own-programming-language.component';

describe('AnOwnProgrammingLanguageComponent', () => {
  let component: AnOwnProgrammingLanguageComponent;
  let fixture: ComponentFixture<AnOwnProgrammingLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnOwnProgrammingLanguageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnOwnProgrammingLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
