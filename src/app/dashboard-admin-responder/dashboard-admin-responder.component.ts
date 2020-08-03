import { Component, OnInit } from '@angular/core';
import {ProductService} from 'src/app/product.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {ToastrService} from 'ngx-toastr'
import { Observable } from 'rxjs';
import { Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-dashboard-admin-responder',
  templateUrl: './dashboard-admin-responder.component.html',
  styleUrls: ['./dashboard-admin-responder.component.css']
})
export class DashboardAdminResponderComponent implements OnInit {
  postResult:FormGroup;
  ticketList:Observable<any>;
  ticketId;
  title;
  description;
  AllUser:Observable<any>;
  constructor(private productService:ProductService,private fb:FormBuilder,private toastr:ToastrService,private activateRoute:ActivatedRoute,private route:Router) { 
     this.ticketId=parseInt(this.activateRoute.snapshot.paramMap.get('id'));
    console.log(this.ticketId);
    this.postResult=this.fb.group({
      responderid:this.fb.control("")
    })
    this.ticketList=this.productService.ViewTicketById(this.ticketId);
    console.log(this.ticketList);
    this.ticketList.forEach(element=>{
      element.forEach(element1=>{
      this.title=element1.title;
     // console.log(this.title);
      this.description=element1.description;
      })
      
     
    })
   this.postResult=this.fb.group({
      responderid:this.fb.control('',[Validators.required])
   });
   
    this.AllUser=productService.AllUserInfo();
  }


  submitData()
  {
    if(this.postResult.valid)
    {
      console.log({userid:parseInt((document.getElementById('ticketid')as HTMLInputElement).value),responderid:((document.getElementById('responderid')as HTMLInputElement).value)});
      this.productService.ChangeResponder({ticketId:parseInt((document.getElementById('ticketid')as HTMLInputElement).value),responderid:parseInt((document.getElementById('responderid')as HTMLInputElement).value)}).subscribe((data)=>{
        if(data==true)
        {
          this.toastr.success('Updated successfully','done',{
            positionClass:'toast-center-center',
            timeOut:2000
          })
          this.route.navigate(['../dashboardadmin/view']);
        }
        else{
          this.toastr.error('There was an error while updating','Oops',{
            positionClass:'toast-center-center',
            timeOut:2000
          })
        }
      })
    }
    
    
  }
  cancelData()
  {
    this.route.navigate(['../dashboardadmin/view']);
  }

  ngOnInit(): void {
  }

}
