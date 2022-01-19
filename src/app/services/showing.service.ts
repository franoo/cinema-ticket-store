import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CinemaHall } from '../models/cinemaHall.model';
import { Movie } from '../models/movie.model';
import { Showing } from '../models/showing.model';

@Injectable({
  providedIn: 'root'
})
export class ShowingService {

  constructor() { }

  getShowings(): Observable<Showing[]>{
    const showings = of(this.showings);
    console.log(showings);
    return showings;
  }



  showings: Showing[] = [
    new Showing(
      1, 
      new Movie(1, 
                "MC: godzina do 1 terminu", 
                "film grozy, horror.",
                new Date("December 17, 1991 03:24:00")),
      new Date("January 30, 2022 03:24:00"),
      new CinemaHall(1, "sala 1", 12,12)
    ),
    new Showing(
      2, 
      new Movie(1, 
                "MC: godzina do 1 terminu", 
                "film grozy, horror.",
                new Date("December 17, 1991 03:24:00")),
      new Date("January 30, 2022 05:24:00"),
      new CinemaHall(2, "sala 2", 8,8)
    ),
    new Showing(
      3, 
      new Movie(
                2, 
                "SMIW: zemsta zza grobu", 
                "straszny, nie polecamy.",
                new Date("October 11, 1998 14:24:00")),
      new Date("January 30, 2022 14:24:00"),
      new CinemaHall(1, "sala 1", 12,12)
    ),
  ];



}
