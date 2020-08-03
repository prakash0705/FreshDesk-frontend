import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import {AuthAdminService} from 'src/app/auth-admin.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isVisible:Boolean;
  data;
  UserData=[];
  Username;
  isAdmin:Boolean;
 
  constructor(private authAdminService:AuthAdminService)
   {
      if(window.localStorage.getItem("token")!=null)
      {
        if(this.authAdminService.checkUser())
        {
          this.isAdmin=true;
        }
        this.isVisible=true;
        //this.isAdmin=false;
        this.data=JSON.parse(window.localStorage.getItem("token"));
        this.UserData.push(this.data.data);
        this.UserData.forEach(element=>{
           
            element.forEach(element1 => {
                this.Username=element1.firstName;
            });
        })  
      }
      else
      {
        this.isVisible=false;
      }


   }
   logout()
   {
      window.localStorage.clear();
      window.location.href="";
   }
  

  ngOnInit(): void {
  }

}
