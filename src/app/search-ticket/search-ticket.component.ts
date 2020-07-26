import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { ToastrService } from 'ngx-toastr'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-ticket',
  templateUrl: './search-ticket.component.html',
  styleUrls: ['./search-ticket.component.css']
})
export class SearchTicketComponent implements OnInit {
  isVisible: boolean;
  data;
  UserData = [];
  UserId;
  ticketList = [];
  ticketObserver:Observable<any>;

  constructor(private productService: ProductService, private toastr: ToastrService) {
    if (window.localStorage.getItem("token") != null) {
      this.data = JSON.parse(window.localStorage.getItem("token"));
      this.UserData.push(this.data.data);
      this.UserData.forEach(element => {
       // console.log(element);
        element.forEach(element1 => {
          this.UserId = element1.id;
        });
      })
    }
  }
  searchTicket() {
    
    let ticketNo=parseInt((document.getElementById('ticket') as HTMLInputElement).value);
    console.log({ ticketId: ticketNo, title: "", description: "" , registerId: this.UserId });
    this.productService.SearchTicket({ ticketId: ticketNo, title: "", description: "" , registerId: this.UserId }).subscribe((data) => {
      this.ticketList = data;
      //console.log(this.ticketList);
      if (this.ticketList.length != 0) {
        this.toastr.success('Search found', '', {
          positionClass: 'toast-center-center',
          timeOut: 2000
        })
        this.isVisible=true;
      }
      else
      {
        this.toastr.warning('No ticket found', 'Oops', {
          positionClass: 'toast-center-center',
          timeOut: 2000
        });
      }
     
    })
    var res=(document.getElementById('title')as HTMLInputElement).value="";
    var res1=(document.getElementById('description')as HTMLInputElement).value="";
  }
  searchDescription() {
    this.productService.SearchTicket({ ticketId: 0, title: "", description: (document.getElementById('description') as HTMLInputElement).value, registerId: this.UserId }).subscribe((data) => {
      this.ticketList = data;
      //console.log(this.ticketList);
      if (this.ticketList.length != 0) {
        this.toastr.success('Search found', '', {
          positionClass: 'toast-center-center',
          timeOut: 2000
        })
        this.isVisible=true;
      }
      else
      {
        this.toastr.warning('No ticket found', 'Oops', {
          positionClass: 'toast-center-center',
          timeOut: 2000
        });
      }
     
    })
    var res=(document.getElementById('title')as HTMLInputElement).value="";
    var res1=(document.getElementById('ticket')as HTMLInputElement).value="";
  }
  searchTitle() {
    this.productService.SearchTicket({ ticketId: 0, title: (document.getElementById('title') as HTMLInputElement).value, description: "", registerId: this.UserId }).subscribe((data) => {
      this.ticketList = data;
      //console.log(this.ticketList);
      if (this.ticketList.length != 0) {
        this.toastr.success('Search found', '', {
          positionClass: 'toast-center-center',
          timeOut: 2000
        })
        this.isVisible=true;
      }
      else
      {
        this.toastr.warning('No ticket found', 'Oops', {
          positionClass: 'toast-center-center',
          timeOut: 2000
        });
      }
     
    })
    var res=(document.getElementById('description')as HTMLInputElement).value="";
    var res1=(document.getElementById('ticket')as HTMLInputElement).value="";
  }

  DeleteTicket(event)
  {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = parseInt(idAttr.nodeValue);

    this.productService.DeleteTicket({TicketId:value}).subscribe((data)=>{
        this.toastr.success('Ticket Deleted', 'Done', {
          positionClass: 'toast-center-center',
          timeOut: 3000
        });
    })
    window.location.reload(true);
    
  }

  ngOnInit(): void {
  }

}
