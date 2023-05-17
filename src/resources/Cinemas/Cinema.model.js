import { v4 as uuidv4 } from 'uuid';

class Cinema {
  constructor({ id = uuidv4(), adress = "central", numberOfHalls = 4 } = {}) {
    this.id = id;
    this.adress = adress;
    this.numberOfHalls = numberOfHalls;
  }

  static toResponse(cinema) {
    const { id, adress, numberOfHalls } = cinema;
    return { id, adress, numberOfHalls };
  }
}

export default Cinema;
