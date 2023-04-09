const Visiter = require('./visiter.model');

const Visiters = [new Visiter()];

const getAll = async () => Visiters;

const getById = async (id) => Visiters.find((visiter) => visiter.id === id);

const createVisiter = async ({ id, Name, Age, TicketID }) => {
  const visiter = new Visiter({ id, Name, Age, TicketID });
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

const updateById = async ({ id, Name, Age, TicketID }) => {
  const VisiterPosition = Visiters.findIndex((visiter) => visiter.id === id);

  if (VisiterPosition === -1) return null;

  const oldVisiter = Visiters[VisiterPosition];
  const newVisiter = { ...oldVisiter, Name, Age, TicketID };

  Visiters.splice(VisiterPosition, 1, newVisiter);
  return newVisiter;
};

module.exports = {
  Visiters,
  getAll,
  getById,
  createVisiter,
  deleteById,
  updateById,
};
