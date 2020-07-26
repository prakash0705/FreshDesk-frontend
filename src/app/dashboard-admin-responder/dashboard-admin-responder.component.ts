import { Component, OnInit } from '@angular/core';
import {ProductService} from 'src/app/product.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {ToastrService} from 'ngx-toastr'
@Component({
  selector: 'app-dashboard-admin-responder',
  templateUrl: './dashboard-admin-responder.component.html',
  styleUrls: ['./dashboard-admin-responder.component.css']
})
export class DashboardAdminResponderComponent implements OnInit {
  postResult:FormGroup;
  constructor(private productService:ProductService,private fb:FormBuilder,private toastr:ToastrService) { 
    this.postResult=this.fb.group({
      userid:this.fb.control("",[Validators.required]),
      responderid:this.fb.control("",[Validators.required,Validators.min(1)])
    })
  }


  submitData()
  {
    if(this.postResult.valid)
    {
      this.productService.ChangeResponder({userid:parseInt((document.getElementById('userid')as HTMLInputElement).value),responderid:parseInt((document.getElementById('responderid')as HTMLInputElement).value)}).subscribe((data)=>{
        if(data==true)
        {
          this.toastr.success('Updated successfully','done',{
            positionClass:'toast-center-center',
            timeOut:2000
          })
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

  ngOnInit(): void {
  }

}
