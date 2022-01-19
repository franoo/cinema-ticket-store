import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Seat } from '../models/seat.model';
import { Ticket } from '../models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor() { }

  getTicketsForShowing(id:number){
    var filteredArray = this.tickets.filter( obj => obj.showingId === id ).map( obj => obj.id );
    const tickets = of(filteredArray);
  }
  
  tickets: Ticket[] = [
    new Ticket(
      1, 1,new Seat(36, 1, 6,6)
    ),
    new Ticket(
      2, 1,new Seat(37, 1, 6,7)
    ),
    new Ticket(
      3, 1,new Seat(16, 1, 4,4)
    ),  
    new Ticket(
      4, 2,new Seat(16, 1, 4,4)
    ),       
  ];
}
