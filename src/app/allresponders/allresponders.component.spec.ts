import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllrespondersComponent } from './allresponders.component';

describe('AllrespondersComponent', () => {
  let component: AllrespondersComponent;
  let fixture: ComponentFixture<AllrespondersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllrespondersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllrespondersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
