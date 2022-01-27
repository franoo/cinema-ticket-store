import { Component, Input, OnInit } from '@angular/core';
import { Showing } from 'src/app/models/showing.model';
import { TicketRequest } from 'src/app/models/ticketRequest.model';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-showing-item-details',
  templateUrl: './showing-item-details.component.html',
  styleUrls: ['./showing-item-details.component.css']
})
export class ShowingItemDetailsComponent implements OnInit {

  ticketsToReserve:TicketRequest[]=[];
  constructor(private ticketService:TicketService) { 

  }

  @Input() showing: Showing;
  showDetails= false;
  ngOnInit(): void {
    this.ticketService.ticketToReserveData.subscribe(data=>{
      this.ticketsToReserve = data;
      console.log(this.ticketsToReserve);
    });
  }
  onDetailsShow(){
    this.showDetails=!this.showDetails;
  }
}
