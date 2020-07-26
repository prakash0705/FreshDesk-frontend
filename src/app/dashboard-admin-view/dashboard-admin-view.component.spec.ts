import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdminViewComponent } from './dashboard-admin-view.component';

describe('DashboardAdminViewComponent', () => {
  let component: DashboardAdminViewComponent;
  let fixture: ComponentFixture<DashboardAdminViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAdminViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAdminViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
