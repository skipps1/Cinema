import { v4 as uuidv4 } from 'uuid';

class Visiter {
  constructor({ id = uuidv4(), name = 'Visiter', age = 12} = {}) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  static toResponse(visiter) {
    const { id, name, age } = visiter;
    return { id, name, age };
  }
}

export default Visiter;
