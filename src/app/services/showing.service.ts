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

  
  getShowing(id:number): Observable<Showing>{
    const showing = this.showings.find(x => x.id == id);
    //console.log(showing);
    const observableShowing = of(showing!);
    return observableShowing;
  }


  showings: Showing[] = [
    new Showing(
      1, 
      new Movie(1, 
                "MC: godzina do 1 terminu", 
                "film akcji, dreszczowiec.",
                "Thriller",
                180,
                new Date("December 17, 1991 03:24:00")),
                
      new Date("January 30, 2022 03:00:00"),
      new CinemaHall(1, "sala 1", 12,12),
      true
    ),
    new Showing(
      2, 
      new Movie(1, 
                "MC: godzina do 1 terminu", 
                "film akcji, dreszczowiec.",
                "Thriller",
                180,
                new Date("December 17, 1991 03:24:00")),
      new Date("January 30, 2022 05:00:00"),
      new CinemaHall(2, "sala 2", 8,8),
      true
    ),
    new Showing(
      3, 
      new Movie(
                2, 
                "Lorem Ipsum: dolor sit amet", 
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "Obyczajowy",
                110,
                new Date("October 11, 1998 14:24:00")),
      new Date("January 30, 2022 14:00:00"),
      new CinemaHall(1, "sala 1", 12,12),
      true
    ),
    new Showing(
      3, 
      new Movie(
                2, 
                "ZWROT 3D", 
                "Familijna komedia. Ostatnia część trylogii o znanym bohaterze",
                "Komedia",
                45,
                new Date("October 11, 2022 14:24:00")),
      new Date("January 30, 2022 17:00:00"),
      new CinemaHall(2, "sala 2", 12,12),
      false
    ),
  ];



}
