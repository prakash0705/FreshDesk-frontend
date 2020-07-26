import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

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
 
  constructor()
   {
      if(window.localStorage.getItem("token")!=null)
      {
        this.isVisible=true;
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
