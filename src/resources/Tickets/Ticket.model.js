import { v4 as uuidv4 } from 'uuid';

class Ticket {
  constructor({ id = uuidv4(), seat = 1, hall = 2, filmName = 'SHREK', cinemaID = uuidv4(), duration = 120, visiterID = uuidv4() } = {}) {
    this.id = id;
    this.seat = seat;
    this.hall = hall;
    this.filmName = filmName;
    this.cinemaID = cinemaID;
    this.duration = duration;
    this.visiterID = visiterID;
  }

  static toResponse(ticket) {
    const { id, seat, hall, filmName, duration, visiterID} = ticket;
    return { id, seat, hall, filmName, duration, visiterID};
  }
}

export default Ticket;

