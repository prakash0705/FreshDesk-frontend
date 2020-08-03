import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { SearchTicketComponent } from './search-ticket/search-ticket.component';
import { UpdateTicketComponent } from './update-ticket/update-ticket.component';
import { ContactComponent } from './contact/contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardAdminViewComponent } from './dashboard-admin-view/dashboard-admin-view.component';
import { DashboardAdminResponderComponent } from './dashboard-admin-responder/dashboard-admin-responder.component';
import { DashboardAdminTicketstatusComponent } from './dashboard-admin-ticketstatus/dashboard-admin-ticketstatus.component';
import { AllusersComponent } from './allusers/allusers.component';
import { AllrespondersComponent } from './allresponders/allresponders.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    AddTicketComponent,
    ViewTicketComponent,
    SearchTicketComponent,
    UpdateTicketComponent,
    ContactComponent,
    AddContactComponent,
    DashboardAdminComponent,
    DashboardAdminViewComponent,
    DashboardAdminResponderComponent,
    DashboardAdminTicketstatusComponent,
    AllusersComponent,
    AllrespondersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
