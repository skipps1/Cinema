import { v4 as uuidv4 } from 'uuid';

class Visiter {
  constructor({ id = uuidv4(), Name = 'Visiter', Age = 12, TicketID = uuidv4()} = {}) {
    this.id = id;
    this.Name = Name;
    this.Age = Age;
    this.TicketID = TicketID
  }

  static toResponse(visiter) {
    const { id, Name, Age, TicketID } = visiter;
    return { id, Name, Age, TicketID };
  }
}

export default Visiter;
