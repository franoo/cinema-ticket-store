import { Component, OnInit, Input } from '@angular/core';
import { Showing } from '../models/showing.model';
import { Ticket } from '../models/ticket.model';
import { ShowingService } from '../services/showing.service';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-ticket-purchase',
  templateUrl: './ticket-purchase.component.html',
  styleUrls: ['./ticket-purchase.component.css']
})
export class TicketPurchaseComponent implements OnInit {

  constructor(private showingsService: ShowingService, 
              private ticketService:TicketService) { }

  @Input() showing: Showing;
  @Input() tickets: Ticket[]=[];

  seats: boolean[]=[];

  ngOnInit(): void {
    var rows = this.showing.cinemaHall.rows;
    var columns = this.showing.cinemaHall.columns;
    for(var i=0; i<rows*columns;i++){
      this.seats.push(false);//fill array with false values meaning seat is available
    }
    this.updateSeatsWithTickets();

  }

  private updateSeatsWithTickets(){
    this.tickets.forEach(element => {
      this.seats[this.showing.cinemaHall.rows * element.seat.rowId + element.seat.columnId]=true;
    });
    console.log(this.seats);
  }

}
