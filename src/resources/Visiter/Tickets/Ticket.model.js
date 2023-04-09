import { v4 as uuidv4 } from 'uuid';

class Ticket {
  constructor({ id = uuidv4(), Seat = 1, Hall = 2, Film_name = 'SHREK', Adress = "central", Duration = 120 } = {}) {
    this.id = id;
    this.Seat = Seat;
    this.Hall = Hall;
    this.Film_name = Film_name;
    this.Adress = Adress;
    this.Duration = Duration;
  }

  static toResponse(ticket) {
    const { id, Seat, Hall, Film_name, Adress, Duration} = ticket;
    return { id, Seat, Hall, Film_name, Adress, Duration };
  }
}

export default Ticket;
