import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdminTicketstatusComponent } from './dashboard-admin-ticketstatus.component';

describe('DashboardAdminTicketstatusComponent', () => {
  let component: DashboardAdminTicketstatusComponent;
  let fixture: ComponentFixture<DashboardAdminTicketstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAdminTicketstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAdminTicketstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
