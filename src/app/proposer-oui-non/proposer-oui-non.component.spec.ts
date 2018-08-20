import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposerOuiNonComponent } from './proposer-oui-non.component';

describe('ProposerOuiNonComponent', () => {
  let component: ProposerOuiNonComponent;
  let fixture: ComponentFixture<ProposerOuiNonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposerOuiNonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposerOuiNonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
