import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ProductService } from 'src/app/product.service';
import { ToastrService } from 'ngx-toastr'
import { Router } from '@angular/router'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  data;
  UserData = [];
  FirstName;
  LastName;
  Email;
  UserId;
  isVisible: boolean;
  isContactVisible: boolean;
  postResult: FormGroup;
  contactList = [];
  contactNumber;
  contactId;

  constructor(private productService: ProductService, private fb: FormBuilder, private router: Router, private toastr: ToastrService) {
    this.data = JSON.parse(window.localStorage.getItem("token"));
    this.UserData.push(this.data.data);
    this.UserData.forEach(element => {
      //console.log(element);
      element.forEach(element1 => {
        this.UserId = element1.id
        this.FirstName = element1.firstName;
        this.LastName = element1.lastName;
        this.Email = element1.email;
      });
    })
    this.postResult = this.fb.group({
      email: this.Email,
      phone: this.fb.control('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      userId: this.UserId
    });

    this.productService.ViewContact(this.UserId).subscribe((data) => {
      this.isContactVisible=false;
      this.contactList.push(data);
      this.contactList.forEach(element => {
        element.forEach(element1 => {
         // this.contactList = element1.mobile;
          this.contactNumber = element1.mobile;
          this.contactId = element1.id;
          if (element1.mobile != 0) {
            this.isContactVisible = true;
          }
          else {
            this.isContactVisible = false;
          }
        });
      })
      console.log(data);


    })
  }
  changeField() {
    this.isVisible = true;
  }

  postSubmit() {
    if (this.isContactVisible == false) {
      if (this.postResult.valid) {
        console.log({ email: this.Email, phone: parseInt((document.getElementById('phone') as HTMLInputElement).value), userId: this.UserId });
        this.productService.AddContact({ email: this.Email, mobile: parseInt((document.getElementById('phone') as HTMLInputElement).value), userId: this.UserId }).subscribe((data) => {
          if (data == true) {
            this.toastr.success('Contact Added', 'Success', {
              positionClass: 'toast-center-center',
              timeOut: 2000
            })
            this.productService.ViewContact(this.UserId).subscribe((data) => {
              console.log(data);
              this.contactList.push(data);
              this.contactList.forEach(element => {
                element.forEach(element1 => {
                  //this.contactList = element1.mobile;
                  this.contactNumber = element1.mobile;
                  if (element1.mobile != 0) {
                    this.isContactVisible = true;
                    this.isVisible = false;
                  }
                  else {
                    this.isContactVisible = false;
                    this.isVisible=true;
                  }
                });
              })
            })
          }
        })
      }
    }
    else {
      if (this.postResult.valid) {
        this.productService.UpdateContact({ ContactId: this.contactId, Email: this.Email, Phone: parseInt((document.getElementById('phone') as HTMLInputElement).value) }).subscribe((data) => {
          console.log("error");
          if (data == true) {
            this.toastr.success('Updated successfully', 'Done', {
              positionClass: 'toast-center-center',
              timeOut: 2000
            })
            this.productService.ViewContact(this.UserId).subscribe((data) => {
              this.contactList.pop();
              this.contactList.push(data);
              this.contactList.forEach(element => {
                element.forEach(element1 => {
                  this.contactNumber = element1.mobile;
                  if (element1.mobile != 0) {
                    this.isContactVisible = true;
                    this.isVisible = false;
                  }
                  else {
                    this.isContactVisible = false;
                  }
                });
              });
            });
          }
        })
      }

    }

  }
  onCancel(){
    this.isVisible=false;

  }
  ngOnInit(): void {
  }

}
