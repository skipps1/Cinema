import { v4 as uuidv4 } from 'uuid';
import { TTicketModel, TTicketResponse } from './Ticket.type';

class Ticket {
  id:string;
  seat:number;
  hall:number;
  filmName:string;
  cinemaID:string;
  duration:number;
  visiterID:string;

  constructor({ id = uuidv4(), seat = 1, hall = 2, filmName = 'SHREK', cinemaID = uuidv4(), duration = 120, visiterID = uuidv4() } = {}) {
    this.id = id;
    this.seat = seat;
    this.hall = hall;
    this.filmName = filmName;
    this.cinemaID = cinemaID;
    this.duration = duration;
    this.visiterID = visiterID;
  }

  static toResponse(ticket) : TTicketResponse {
    const { id, seat, hall, filmName, duration, cinemaID, visiterID} = ticket;
    return { id, seat, hall, filmName, duration, cinemaID, visiterID};
  }
}

export default Ticket;

