import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposerQuestionOuverteComponent } from './proposer-question-ouverte.component';

describe('ProposerQuestionOuverteComponent', () => {
  let component: ProposerQuestionOuverteComponent;
  let fixture: ComponentFixture<ProposerQuestionOuverteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposerQuestionOuverteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposerQuestionOuverteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
