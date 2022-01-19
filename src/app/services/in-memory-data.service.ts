import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CinemaHall } from '../models/cinemaHall.model';
import { Movie } from '../models/movie.model';
import { Seat } from '../models/seat.model';
import { Showing } from '../models/showing.model';
import { Ticket } from '../models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }
  createDb() {
    const showings = [
      new Showing(
        1, 
        new Movie(1, 
                  "MC: godzina do 1 terminu", 
                  "film grozy, horror.",
                  new Date("December 17, 1991 03:24:00")),
        new Date("January 30, 2022 03:24:00"),
        new CinemaHall(1, "sala 1")
      ),
      new Showing(
        2, 
        new Movie(1, 
                  "MC: godzina do 1 terminu", 
                  "film grozy, horror.",
                  new Date("December 17, 1991 03:24:00")),
        new Date("January 30, 2022 05:24:00"),
        new CinemaHall(2, "sala 2")
      ),
      new Showing(
        3, 
        new Movie(
                  2, 
                  "SMIW: zemsta zza grobu", 
                  "straszny, nie polecamy.",
                  new Date("October 11, 1998 14:24:00")),
        new Date("January 30, 2022 14:24:00"),
        new CinemaHall(1, "sala 1")
      ),

      
    ];
    const tickets = [
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
    return {showings, tickets};
  }
}
