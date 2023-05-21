export interface TTicket {
    seat: number;
    hall:number;
    filmName:string;
    cinemaID:string;
    duration:number;
    visiterID:string;
}

export interface TTicketModel extends TTicket {
    id: string;
}

export interface TTicketResponse extends TTicket {
    id: string;
}