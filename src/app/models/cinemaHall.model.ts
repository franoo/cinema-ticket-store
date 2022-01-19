import { Seat } from "./seat.model";

export class CinemaHall{
    constructor(
        public id:number,
        public name:string,
        public rows:number,
        public columns:number
        //public seats: Seat[]
    ){}
}