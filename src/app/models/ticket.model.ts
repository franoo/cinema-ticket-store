import { Seat } from "./seat.model";

export class Ticket{
    constructor(
        public id:number,
        public showingId:number,
        public rowId:number,
        public columnId:number
    ){}
}
