import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteresPersonnaliteComponent } from './criteres-personnalite.component';

describe('CriteresPersonnaliteComponent', () => {
  let component: CriteresPersonnaliteComponent;
  let fixture: ComponentFixture<CriteresPersonnaliteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriteresPersonnaliteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriteresPersonnaliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
