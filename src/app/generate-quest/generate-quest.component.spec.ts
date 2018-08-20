import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateQuestComponent } from './generate-quest.component';

describe('GenerateQuestComponent', () => {
  let component: GenerateQuestComponent;
  let fixture: ComponentFixture<GenerateQuestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateQuestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
