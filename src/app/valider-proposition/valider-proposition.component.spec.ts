import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiderPropositionComponent } from './valider-proposition.component';

describe('ValiderPropositionComponent', () => {
  let component: ValiderPropositionComponent;
  let fixture: ComponentFixture<ValiderPropositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValiderPropositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValiderPropositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
