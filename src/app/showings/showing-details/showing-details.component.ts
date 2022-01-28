import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Showing } from 'src/app/models/showing.model';
import { Ticket } from 'src/app/models/ticket.model';
import { TicketRequest } from 'src/app/models/ticketRequest.model';
import { ShowingService } from 'src/app/services/showing.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-showing-details',
  templateUrl: './showing-details.component.html',
  styleUrls: ['./showing-details.component.css']
})
export class ShowingDetailsComponent implements OnInit {

  constructor(    private route: ActivatedRoute,
    private router: Router, private showingService:ShowingService,
    private ticketService:TicketService) { }

  showing:Showing;
  tickets: Ticket[]=[];
  ticketsToReserve: TicketRequest[]=[];
  seatsSelected=false;//select on map
  seatsChosen=false;//choose and proceed
  finishPurchase=false;

  ticketReservationMessage='';

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) =>{
      const id = params['id'];
      this.showingService.getShowing(id).subscribe((data :Showing)=>{
          this.showing=data;
      });
      this.ticketService.getTicketsForShowing(id).subscribe((data :Ticket[])=>{
        this.tickets=data;
        console.log(this.tickets);
      });
      this.ticketService.ticketToReserveData.subscribe(data=>{
        this.ticketsToReserve = data;
        console.log(this.ticketsToReserve);
        if(this.ticketsToReserve == null || this.ticketsToReserve.length==0){
          this.seatsSelected=false;
        }
        else{
          this.seatsSelected=true;
        }
    });
    });
    this.ticketService.reservedTicketData.subscribe(data=>{
      //this.finishPurchase=true;
      console.log(this.finishPurchase);
    });
  }

  confirmSeats(){
    this.seatsChosen=true;
  }
  returnToMain(){
    this.router.navigateByUrl('/showings');
  }
  reserveSeats(){
    this.ticketService.reserveTickets(this.ticketsToReserve);
    this.finishPurchase=true;
  }
}
