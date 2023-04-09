import { v4 as uuidv4 } from 'uuid';

class Visiter {
  constructor({ id = uuidv4(), name = 'Visiter', Age = 12, TicketID = uuidv4()} = {}) {
    this.id = id;
    this.name = name;
    this.Age = Age;
    this.TicketID = TicketID
  }

  static toResponse(visiter) {
    const { id, name, Age } = visiter;
    return { id, name, Age };
  }
}

export default Visiter;
