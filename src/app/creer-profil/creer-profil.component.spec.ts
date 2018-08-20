import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerProfilComponent } from './creer-profil.component';

describe('CreerProfilComponent', () => {
  let component: CreerProfilComponent;
  let fixture: ComponentFixture<CreerProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
