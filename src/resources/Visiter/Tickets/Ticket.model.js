import { v4 as uuidv4 } from 'uuid';

class Ticket {
  constructor({ id = uuidv4(), Seat = 1, Hall = 2, Film_name = 'SHREK', Adress = "central", Duration = 120 } = {}) {
    this.id = id;
    this.Seat = Seat;
    this.Hall = Hall;
    this.Film_name = Film_name;
    this.Adress = Adress;
    this.Duration = Duration;
    this.Vname = Vname;
  }

  static toResponse(ticket) {
    const { id, Seat, Hall, Film_name, Duration, Vname} = ticket;
    return { id, Seat, Hall, Film_name, Duration, Vname};
  }
}

export default Ticket;
