import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {ProductService} from 'src/app/product.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {
  AllUser:Observable<any>;
  contactList = [];
  constructor(private productService:ProductService) {
    this.AllUser=productService.AllUserInfo();
    console.log(this.AllUser);
    this.productService.ViewContact(0).subscribe((data)=>{
      data.forEach(element => {
        this.contactList.push(element);  
      });  
      
        console.log(this.contactList);
    
    });
   }

  ngOnInit(): void {
  }

}
