import { Injectable } from '@angular/core';
import { Seat } from '../models/seat.model';
import { Ticket } from '../models/ticket.model';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { TicketRequest } from '../models/ticketRequest.model';
@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor() { }

  getTicketsForShowing(id:number): Observable<Ticket[]>{
    var filteredArray = this.tickets.filter( obj => obj.showingId == id );
    const tickets = of(filteredArray)!;
    return tickets;
  }
  
  addTicket(ticket:Ticket){
    this.tickets.push(ticket);
  }

  ticketToReserveSubject= new BehaviorSubject<TicketRequest[]>(null as any);
  ticketToReserveData= this.ticketToReserveSubject.asObservable();
  
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
