import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposerVraiFauxComponent } from './proposer-vrai-faux.component';

describe('ProposerVraiFauxComponent', () => {
  let component: ProposerVraiFauxComponent;
  let fixture: ComponentFixture<ProposerVraiFauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposerVraiFauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposerVraiFauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
