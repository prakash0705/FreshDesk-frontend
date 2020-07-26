import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdminResponderComponent } from './dashboard-admin-responder.component';

describe('DashboardAdminResponderComponent', () => {
  let component: DashboardAdminResponderComponent;
  let fixture: ComponentFixture<DashboardAdminResponderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAdminResponderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAdminResponderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
