import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {ProductService} from 'src/app/product.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  postResult:FormGroup;
  fieldTextType: boolean;
  constructor(private fb: FormBuilder,private productService:ProductService,private toastr:ToastrService) { 
    this.postResult=this.fb.group({
      firstName:this.fb.control("",[Validators.required,Validators.minLength(3),Validators.max(15)]),
      lastName:this.fb.control("",[Validators.required,Validators.minLength(3),Validators.max(15)]),
      email:this.fb.control("",[Validators.required,Validators.email]),
      password:this.fb.control("",[Validators.required,Validators.minLength(3),Validators.max(15)])
    })
  }

  postSubmit()
  {
    if(this.postResult.valid)
    {
      this.productService.PostRegister(this.postResult.value).subscribe(
        (data)=>{
          
          this.toastr.success('Account Created Successfully','Welcome',{
            positionClass: 'toast-center-center'
          });
          this.productService.PostLogin({
            email:(document.getElementById("email")as HTMLInputElement).value,password:(document.getElementById("password")as HTMLInputElement).value
          }).subscribe((data)=>{
            window.localStorage.setItem("token",JSON.stringify({data}));
            if(window.localStorage.getItem("token")!=null)
            {
              console.log("Success");
              window.location.href="";
            }
          })
        }
      )
    }
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
  ngOnInit(): void {
  }

}
