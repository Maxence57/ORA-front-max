import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposerQcmComponent } from './proposer-qcm.component';

describe('ProposerQcmComponent', () => {
  let component: ProposerQcmComponent;
  let fixture: ComponentFixture<ProposerQcmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposerQcmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposerQcmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
