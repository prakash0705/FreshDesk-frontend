import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service'
import { ToastrService } from 'ngx-toastr'
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard-admin-ticketstatus',
  templateUrl: './dashboard-admin-ticketstatus.component.html',
  styleUrls: ['./dashboard-admin-ticketstatus.component.css']
})
export class DashboardAdminTicketstatusComponent implements OnInit {
  postResult: FormGroup;
  ticketId;
  ticketList: Observable<any>;
  title;
  description;
  constructor(private productService: ProductService, private toastr: ToastrService, private fb: FormBuilder, private activateRoute: ActivatedRoute, private route: Router) {
    this.ticketId = parseInt(this.activateRoute.snapshot.paramMap.get('id'));
    this.postResult = this.fb.group({
      status: this.fb.control('', [Validators.required])
    })
    this.ticketList = this.productService.ViewTicketById(this.ticketId);
    // console.log(this.ticketList);
    this.ticketList.forEach(element => {
      element.forEach(element1 => {
        this.title = element1.title;
        // console.log(this.title);
        this.description = element1.description;
      })


    })
  }
  changeStatus() {
    if(this.postResult.valid)
    {
      console.log({ Id: parseInt((document.getElementById('ticketid') as HTMLInputElement).value), Status: (document.getElementById('status') as HTMLInputElement).value });
      this.productService.ChangeStatus({ Id: parseInt((document.getElementById('ticketid') as HTMLInputElement).value), Status: (document.getElementById('status') as HTMLInputElement).value }).subscribe((data => {
      if (data == true) {
        this.toastr.success('Updated', 'Done', {
          positionClass: 'toast-center-center',
          timeOut: 2000
        })
      }
    }));  
    }
    
  }
  cancelData() {
    this.route.navigate(['../dashboardadmin/view']);
  }


  ngOnInit(): void {

  }

}
