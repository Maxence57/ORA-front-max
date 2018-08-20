import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinQuestionnaireComponent } from './fin-questionnaire.component';

describe('FinQuestionnaireComponent', () => {
  let component: FinQuestionnaireComponent;
  let fixture: ComponentFixture<FinQuestionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinQuestionnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
