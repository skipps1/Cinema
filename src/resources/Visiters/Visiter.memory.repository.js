import Visiter from './Visiter.model.js';

const Visiters = [new Visiter()];

const getAll = async () => Visiters;

const getById = async (id) => Visiters.find((visiter) => visiter.id === id);

const createVisiter = async ({ id, name, age }) => {
  const visiter = new Visiter({ id, name, age });
  Visiters.push(visiter);
  return visiter;
};

const deleteById = async (id) => {
  const VisiterPosition = Visiters.findIndex((visiter) => visiter.id === id);

  if (VisiterPosition === -1) return null;

  const VisiterDeletable = Visiters[VisiterPosition];

  Visiters.splice(VisiterPosition, 1);
  return VisiterDeletable;
};

const updateById = async ({ id, name, age }) => {
  const VisiterPosition = Visiters.findIndex((visiter) => visiter.id === id);

  if (VisiterPosition === -1) return null;

  const oldVisiter = Visiters[VisiterPosition];
  const newVisiter = { ...oldVisiter, name, age }; // убрать TicketID

  Visiters.splice(VisiterPosition, 1, newVisiter);
  return newVisiter;
};

export {
  Visiters,
  getAll,
  getById,
  createVisiter,
  deleteById,
  updateById,
};
