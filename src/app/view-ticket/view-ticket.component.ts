import { Component, OnInit } from '@angular/core';
import {ProductService} from 'src/app/product.service';
import { Observable } from 'rxjs';
import { element } from 'protractor';
import { HttpClient,HttpParams } from '@angular/common/http';
import {ToastrService} from 'ngx-toastr'
import { Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css']
})
export class ViewTicketComponent implements OnInit {
  ticketList:Observable<any>;
  data;
  UserData=[];
  UserId;
  mySubscription: any;  

  constructor(private productList:ProductService,private toastr:ToastrService,private route:Router) { 
    if(window.localStorage.getItem("token")!=null)
    {
      this.data=JSON.parse(window.localStorage.getItem("token"));
      this.UserData.push(this.data.data);
      this.UserData.forEach(element=>{
          //console.log(element);
          element.forEach(element1 => {
            this.UserId=element1.id;  
            //console.log(this.UserId);
          });
      })  
    }
    this.ticketList=this.productList.ViewTicket(this.UserId);
    this.ticketList.forEach(element=>{
   //   this.UserData.push(element);
     // console.log(this.UserData)
      
    })
   // console.log(this.ticketList);
  }
  DeleteTicket(event)
  {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = parseInt(idAttr.nodeValue);

    this.productList.DeleteTicket({TicketId:value}).subscribe((data)=>{
        this.toastr.success('Ticket Deleted', 'Done', {
          positionClass: 'toast-center-center',
          timeOut: 3000
        });
    })
    window.location.reload(true);
    
  }
  
  

  ngOnInit(): void {
  }
  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }

}
