import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {ProductService} from 'src/app/product.service';

@Component({
  selector: 'app-allresponders',
  templateUrl: './allresponders.component.html',
  styleUrls: ['./allresponders.component.css']
})
export class AllrespondersComponent implements OnInit {
  AllUser:Observable<any>;
  contactList = [];
  constructor(private productService:ProductService) {
    this.AllUser=productService.AllUserInfo();
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
