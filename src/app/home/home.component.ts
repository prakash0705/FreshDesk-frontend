import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data;
  UserData=[];
  Username;
  constructor() {
    if(window.localStorage.getItem("token")!=null)
    {
      this.data=JSON.parse(window.localStorage.getItem("token"));
    this.UserData.push(this.data.data);
      this.UserData.forEach(element=>{
      console.log(element);
      element.forEach(element1 => {
        this.Username=element1.firstName+" "+element1.lastName;
        console.log(this.Username);
          console.log(element1.id);
      });
    })
    }
    
   }

  ngOnInit(): void {
  }

}
