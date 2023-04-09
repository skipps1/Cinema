import { v4 as uuidv4 } from 'uuid';

class Cinema {
  constructor({ id = uuidv4(), Adress = "central", Num_of_halls = 4 } = {}) {
    this.id = id;
    this.Adress = Adress;
    this.Num_of_halls = Num_of_halls
  }

  static toResponse(cinema) {
    const { id, Adress, Num_of_halls } = cinema;
    return { id, Adress, Num_of_halls };
  }
}

export default Cinema;
