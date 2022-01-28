import { Component, OnInit, Input } from '@angular/core';
import { Seat } from '../models/seat.model';
import { Showing } from '../models/showing.model';
import { Ticket } from '../models/ticket.model';
import { TicketRequest } from '../models/ticketRequest.model';
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
  reservedSeats:TicketRequest[]=[];
  seats: number[]=[];//0 free, 1 reserved, 2 reserve

  ngOnInit(): void {
    var rows = this.showing.cinemaHall.rows;
    var columns = this.showing.cinemaHall.columns;
    for(var i=0; i<rows*columns;i++){
      this.seats.push(0);//fill array with false values meaning seat is available
    }
    this.updateSeatsWithTickets();

  }

  private updateSeatsWithTickets(){
    this.tickets.forEach(element => {
      this.seats[this.showing.cinemaHall.rows * element.rowId + element.columnId]=1;
    });
    //console.log(this.seats[10*this.showing.cinemaHall.columns + 11]);
  }
  public getValueFromIndex(i:number, j:number): number{
    var index=i*this.showing.cinemaHall.columns + j;
   // console.log(index);
    var result:number = this.seats[i*this.showing.cinemaHall.columns + j];
    //console.log(result);
    //console.log(this.seats[10*this.showing.cinemaHall.columns + 11]);
    return result;
  }
  cancelSeatReservation(i:number,j:number){
    this.seats[i*this.showing.cinemaHall.columns + j]=0;
    var index = this.reservedSeats.findIndex(x => x.rowId == i && x.columnId == j);
    this.reservedSeats.splice(index, 1);
    this.ticketService.ticketToReserveSubject.next(this.reservedSeats);
  }
  reserveSeat(i:number,j:number){
   this.seats[i*this.showing.cinemaHall.columns + j]=2;
   this.reservedSeats.push(new TicketRequest(this.showing.id,i,j));
   this.ticketService.ticketToReserveSubject.next(this.reservedSeats);
  }

}
