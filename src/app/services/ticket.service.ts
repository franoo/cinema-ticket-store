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

  ticketToReserveSubject= new BehaviorSubject<TicketRequest[]>(null as any);
  ticketToReserveData= this.ticketToReserveSubject.asObservable();

  reservedTicketSubject= new BehaviorSubject<string>(null as any);
  reservedTicketData= this.reservedTicketSubject.asObservable();

  getTicketsForShowing(id:number): Observable<Ticket[]>{
    var filteredArray = this.tickets.filter( obj => obj.showingId == id );
    const tickets = of(filteredArray)!;
    return tickets;
  }
  
  addTicket(ticket:Ticket){
    this.tickets.push(ticket);
  }

  reserveTickets(ticket:TicketRequest[]){
    //console.log("helo");
    for (var i=0; i<ticket.length;i++){
      var lastTicket = this.tickets[this.tickets.length-1];
      this.tickets.push(new Ticket(lastTicket.id+1,ticket[i].showingId,ticket[i].rowId, ticket[i].columnId));
    }
    this.reservedTicketSubject.next("Pomyślnie zarezerwowano bilety");
  }

  
  tickets: Ticket[] = [
    new Ticket(
      1, 1, 6,6
    ),
    new Ticket(
      2, 1,6,7
    ),
    new Ticket(
      3, 1,4,4
    ), 
    new Ticket(
      4, 2, 4,4
    ),       
  ];
}
