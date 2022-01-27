import { Seat } from "./seat.model";

export class TicketRequest{
    constructor(
        public showingId:number,
        public rowId: number,
        public columnId:number
    ){}
}