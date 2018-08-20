import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrigerQuestionsComponent } from './corriger-questions.component';

describe('CorrigerQuestionsComponent', () => {
  let component: CorrigerQuestionsComponent;
  let fixture: ComponentFixture<CorrigerQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrigerQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrigerQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
