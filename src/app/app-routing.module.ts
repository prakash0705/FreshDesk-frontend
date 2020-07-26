import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { 
  AuthGuardService as AuthGuard 
} from './auth-guard.service';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { UpdateTicketComponent } from './update-ticket/update-ticket.component';
import { ContactComponent } from './contact/contact.component';
import { SearchTicketComponent } from './search-ticket/search-ticket.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import {AuthAdminService} from 'src/app/auth-admin.service';
import { DashboardAdminViewComponent } from './dashboard-admin-view/dashboard-admin-view.component';
import { DashboardAdminResponderComponent } from './dashboard-admin-responder/dashboard-admin-responder.component';
const routes: Routes = [
  {
    path:"",
    component:DashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"dashboard/addticket",
    component:AddTicketComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"dashboard/viewticket",
    component:ViewTicketComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"dashboard/updateticket",
    component:UpdateTicketComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"dashboard/updateticket/:id",
    component:UpdateTicketComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"dashboard/searchticket",
    component:SearchTicketComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"contact",
    component:ContactComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"dashboardadmin",
    component:DashboardAdminComponent,
    canActivateChild:[true]
  },
  {
    path:"dashboardadmin/view",
    component:DashboardAdminViewComponent,
    canActivateChild:[true]
  },
  {
    path:"dashboardadmin/changeresponder",
    component:DashboardAdminResponderComponent,
    canActivateChild:[true]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
