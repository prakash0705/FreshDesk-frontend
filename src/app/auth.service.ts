import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  UserData=[];
  UserId;
  constructor() { }
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is present and return
    // true or false
    

    if (token == null) {
      return false;
    }
    else
    {
      return true;
    }
    
  }
}
