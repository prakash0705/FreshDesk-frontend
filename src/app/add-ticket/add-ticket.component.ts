import { Component, OnInit } from '@angular/core';
import {ProductService} from 'src/app/product.service';
import {Observable} from 'rxjs';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {ToastrService} from 'ngx-toastr'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {
  data;
  UserData=[];
  Username;
  UserId;
  ticketForm:FormGroup;

  constructor(private productService:ProductService,private fb:FormBuilder,private toastr:ToastrService,private router:Router) {
    this.data=JSON.parse(window.localStorage.getItem("token"));
    this.UserData.push(this.data.data);
    this.UserData.forEach(element=>{
        //console.log(element);
        element.forEach(element1 => {
            this.Username=element1.firstName+" "+element1.lastName;
            this.UserId=element1.id;
        });
      })      
    
    this.ticketForm=this.fb.group({
      title:this.fb.control("",[Validators.required,Validators.minLength(5)]),
      description:this.fb.control("",[Validators.required,Validators.minLength(5)]),
      UserId:this.UserId
    })
        
   }
   onsubmit()
   {
        //console.log(this.ticketForm.value);
        //console.log({title:(document.getElementById("title")as HTMLInputElement).value,description:(document.getElementById("description")as HTMLInputElement).value.replace(/[\r\n]+/gm, " " ),UserId:this.UserId});
        if(this.ticketForm.valid)
        {
          this.productService.AddTicket({title:(document.getElementById("title")as HTMLInputElement).value,description:(document.getElementById("description")as HTMLInputElement).value.replace(/[\r\n]+/gm, " " ),UserId:this.UserId}).subscribe((data)=>{
            if(data==true)
            {
              this.toastr.success('Ticket added successfully','Done',{
                positionClass: 'toast-center-center',
                timeOut:3000
  
              });
              this.router.navigate(["./dashboard"]);
            }
            else
            {
              this.toastr.error('Please update the ticket','Ticket already exist',{
                positionClass: 'toast-center-center',
                timeOut:3000
  
              });
            }
          })
        }

   }
   onCancel()
   {
     this.router.navigate(["./dashboard"]);
   }

  ngOnInit(): void {
  }

}
