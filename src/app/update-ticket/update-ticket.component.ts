import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ProductService } from 'src/app/product.service';
import {ToastrService} from 'ngx-toastr'
import { Router,ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-update-ticket',
  templateUrl: './update-ticket.component.html',
  styleUrls: ['./update-ticket.component.css']
})
export class UpdateTicketComponent implements OnInit {
  ticketList:Observable<any>;
  updateTicketForm: FormGroup;
  data;
  UserData = [];
  UserId;
  ticketId;
  title;
  description;
  constructor(private fb: FormBuilder, private productService: ProductService,private toastr:ToastrService,private router:Router,private activateRoute:ActivatedRoute,private location:Location) {
    this.data = JSON.parse(window.localStorage.getItem("token"));
    this.UserData.push(this.data.data);
    this.UserData.forEach(element => {
      //console.log(element);
      element.forEach(element1 => {
        this.UserId = element1.id;
      });
    })
    this.ticketId=parseInt(this.activateRoute.snapshot.paramMap.get('id'));
    
    this.ticketList=this.productService.ViewTicket(this.UserId);
    this.ticketList.forEach(element=>{
      element.forEach(element1=>{
      this.title=element1.title;
      this.description=element1.description;
      })
      
     
    })
    

    this.updateTicketForm = this.fb.group({
      title: this.fb.control(""),
      description: this.fb.control(""),
      UserId: this.UserId
    })
  
  }


  onsubmit() {
    console.log({Id: this.ticketId, Title: (document.getElementById("title") as HTMLInputElement).value, Description: (document.getElementById("description") as HTMLInputElement).value.replace(/[\r\n]+/gm, " ")});
    this.productService.UpdateTicket({Id: parseInt(this.ticketId), Title: (document.getElementById("title") as HTMLInputElement).value, Description: (document.getElementById("description") as HTMLInputElement).value.replace(/[\r\n]+/gm, " ")}).subscribe((data) => {
      if (data == true) {
        this.toastr.success('Ticket updated successfully','Done',{
          positionClass:'toast-center-center',
          timeOut:2000
        })
        this.router.navigate(["./dashboard/viewticket"]);
     }
    })

  }
  onCancel()
  {
    this.router.navigate(["./dashboard/viewticket"]);
  }

  
  ngOnInit(): void {
    
    

  }

}
