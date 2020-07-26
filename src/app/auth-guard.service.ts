import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {AuthService} from 'src/app/auth.service';
import {AuthAdminService} from 'src/app/auth-admin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public auth:AuthService,private router:Router,private authAdminService:AuthAdminService) { }
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(["home"]);
      return false;
    }
    if(this.auth.isAuthenticated()&&this.authAdminService.checkUser())
    {
      this.router.navigate(['../dashboardadmin']);
      return false;
    }
      return true;
  }
}
