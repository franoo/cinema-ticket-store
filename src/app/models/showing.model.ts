import { CinemaHall } from "./cinemaHall.model";
import { Movie } from "./movie.model";
export class Showing{
    constructor(
        public id:number,
        public movie: Movie,
        public date:Date,
        public cinemaHall: CinemaHall
    ){}
};