import { Component, OnInit } from '@angular/core';
import {ProductService} from 'src/app/product.service';
import { Observable } from 'rxjs';import { Ptor } from 'protractor';
;
@Component({
  selector: 'app-dashboard-admin-view',
  templateUrl: './dashboard-admin-view.component.html',
  styleUrls: ['./dashboard-admin-view.component.css']
})
export class DashboardAdminViewComponent implements OnInit {
  ticketList:Observable<any>;
  constructor(private productService:ProductService) {
    this.ticketList=productService.ViewAllTicket();
    
   }

  ngOnInit(): void {
  }

}
