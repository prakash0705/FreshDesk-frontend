import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/product.service'
import {AuthAdminService} from 'src/app/auth-admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  fieldTextType: boolean;

  constructor(private fb: FormBuilder, private productService: ProductService, private router: ActivatedRoute, private toastr: ToastrService,private authAdminService:AuthAdminService) {
    this.loginForm = this.fb.group({
      email: this.fb.control("", [Validators.required, Validators.email]),
      password: this.fb.control("", [Validators.required])
    })
  }

  Login() {
    if (this.loginForm.valid) {
      this.productService.PostLogin(this.loginForm.value).subscribe((data) => {
          window.localStorage.setItem("token", JSON.stringify({ data }));
          this.toastr.success('Login Success', 'Welcome', {
            positionClass: 'toast-center-center',
            timeOut: 10000
          });
          //console.log(window.localStorage.getItem("token") != null)
          if (window.localStorage.getItem("token") != null) {
            if(this.authAdminService.checkUser())
            {
              window.location.href="../dashboardadmin";
            }
            window.location.href = "";
          }
        
      })
    }
  }
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  ngOnInit(): void {
  }

}
