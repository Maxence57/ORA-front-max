import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposerQuestComponent } from './proposer-quest.component';

describe('ProposerQuestComponent', () => {
  let component: ProposerQuestComponent;
  let fixture: ComponentFixture<ProposerQuestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposerQuestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposerQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
