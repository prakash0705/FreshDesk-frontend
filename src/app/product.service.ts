import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'https://elated-engelbart-99d2f9.netlify.app',
    //'Access-Control-Request-Headers':'GET,POST,PUT'
  });
  options = { headers: this.headers };

  constructor(private http: HttpClient, private toastr: ToastrService) {
  }

  PostRegister(data): Observable<any> {

    return this.http.post("https://freshdeskticket-backend.azurewebsites.net/api/Ticket/register", data, this.options
    ).pipe(catchError(err => {
      if (err.status == 409) {
        this.toastr.error('Please login with your credentials', 'Email already exist', {
          positionClass: 'toast-center-center',
          timeOut: 3000
        });
      }
      if(err.status==400)
      {
        this.toastr.error('Unable to process your request', 'Failed', {
          positionClass: 'toast-center-center',
          timeOut: 3000
        });
      }

      return err;
    }))
      ;
  }
  PostLogin(data): Observable<any> {
    return this.http.post("https://freshdeskticket-backend.azurewebsites.net/api/Ticket/login", data, this.options
    ).pipe(catchError(err => {
      console.log(err);
      if (err.status == 401) {
        this.toastr.error('Incorrect Email or Password', 'Login Failed', {
          positionClass: 'toast-center-center',
          timeOut: 3000
        });
      }
      return err;
    }))
  }
  AddTicket(data): Observable<any> {
    return this.http.post("https://freshdeskticket-backend.azurewebsites.net/api/Ticket/addticket", data, this.options
    ).pipe(catchError(err => {
      if (err.status == 400) {
        this.toastr.error('Unable to add ticket', 'Failed', {
          positionClass: 'toast-center-center',
          timeOut: 3000
        });
      }
      console.log(err);
      return err;
    }))
  }
  ViewTicket(data): Observable<any> {
    return this.http.get("https://freshdeskticket-backend.azurewebsites.net/api/Ticket/viewticket?id=" + data,
    ).pipe(catchError(err => {
      if (err.status == 400) {
        this.toastr.error('Unable to process your request', 'Please try again', {
          positionClass: 'toast-center-center',
          timeOut: 3000
        });
      }
      console.log(err);
      return err;
    }))
  }
  DeleteTicket(data): Observable<any> {
    return this.http.post("https://freshdeskticket-backend.azurewebsites.net/api/Ticket/deleteticket", data, this.options
    ).pipe(catchError(err => {
      if (err.status == 400) {
        console.log(data);
        this.toastr.error('Unable to process your request', 'Please try again', {
          positionClass: 'toast-center-center',
          timeOut: 3000
        });
      }
      console.log(err);
      return err;
    }))
  }
  UpdateTicket(data): Observable<any> {
    return this.http.put("https://freshdeskticket-backend.azurewebsites.net/api/Ticket/updateticket", data
    ).pipe(catchError(err => {
      if (err.status == 400) {
        this.toastr.error('Unable to process your request', 'Please try again', {
          positionClass: 'toast-center-center',
          timeOut: 2000
        });
      }
      console.log(err);
      return err;
    }))
  }
  SearchTicket(data):Observable<any>{
    return this.http.put("https://freshdeskticket-backend.azurewebsites.net/api/Ticket/searchticket",data,this.options
    ).pipe(catchError(err=>{
      if(err.status==400||err.status==500)
      {
        this.toastr.error('Unable to process your request','Please try again',{
          positionClass:'toast-center-center',
          timeOut:2000
        })
      }
      
      return err;
    }))
  }
  ViewAllTicket():Observable<any>{
    return this.http.get("https://freshdeskticket-backend.azurewebsites.net/api/Ticket/viewalluserstickets"
    ).pipe(catchError(err=>{
      return err;
    }))
  }
  ChangeResponder(data):Observable<any>
  {
    return this.http.post("https://freshdeskticket-backend.azurewebsites.net/api/Ticket/changeresponder",data,this.options
    ).pipe(catchError(err=>{
      if(err.status==400||err.status==500)
      {
        this.toastr.error('Unable to process your request','Please try again',{
          positionClass:'toast-center-center',
          timeOut:2000
        })
      }
      return err;
    }))
  }
  AddContact(data): Observable<any> {
    return this.http.post("https://freshdeskticket-backend.azurewebsites.net/api/Ticket/addcontact", data, this.options
    ).pipe(catchError(err => {
      if (err.status == 400) {
        this.toastr.error('Unable to process your request', 'Please try again', {
          positionClass: 'toast-center-center',
          timeOut: 2000
        })
      }
      return err;
    }))
  }
  ViewContact(data): Observable<any> {
    return this.http.get("https://freshdeskticket-backend.azurewebsites.net/api/Ticket/viewcontact?id=" + data
    ).pipe(catchError(err => {
      if (err.status == 400) {
        this.toastr.error('Unable to process your request', 'Please try again', {
          positionClass: 'toast-center-center',
          timeOut: 2000
        })
      }
      return err;
    }))
  }
  UpdateContact(data): Observable<any> {
    return this.http.put("https://freshdeskticket-backend.azurewebsites.net/api/Ticket/updatecontact", data, this.options
    ).pipe(catchError(err => {
      if (err.status == 400) {
        this.toastr.error('Unable to process your request', 'Please try again', {
          positionClass: 'toast-center-center',
          timeOut: 2000
        })
      }
      return err;
    }))
  }


}
