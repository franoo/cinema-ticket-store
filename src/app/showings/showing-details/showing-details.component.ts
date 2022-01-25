import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Showing } from 'src/app/models/showing.model';
import { Ticket } from 'src/app/models/ticket.model';
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
    });
  }

}
