import { v4 as uuidv4 } from 'uuid';

class Cinema {
  constructor({ id = uuidv4(), Adress = "central", numberOfHalls = 4 } = {}) {
    this.id = id;
    this.Adress = Adress;
    this.numberOfHalls = numberOfHalls;
  }

  static toResponse(cinema) {
    const { id, Adress, numberOfHalls } = cinema;
    return { id, Adress, numberOfHalls };
  }
}

export default Cinema;
