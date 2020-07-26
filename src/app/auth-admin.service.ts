import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminService {
  data;
  UserData = [];
  UserId;
  firstName;
  lastName;
  email;
  constructor() { 
    if (window.localStorage.getItem("token") != null) {
      this.data = JSON.parse(window.localStorage.getItem("token"));
      this.UserData.push(this.data.data);
      this.UserData.forEach(element => {
       // console.log(element);
        element.forEach(element1 => {
          this.UserId = element1.id;
          this.firstName=element1.firstName;
          this.lastName=element1.lastName;
          this.email=element1.email;
        });
      })
    }
  }
  checkUser():boolean
  {
    if(this.firstName=="admin"&&this.lastName=="user"&&this.email=="superadmin530@gmail.com")
    {
      return true;
    }
    return false;
  }
}
