import Cinema from './Cinema.model.js';

const Cinemas = [new Cinema()];

const getAll = async () => Cinemas;
  
const getById = async (id) => Cinemas.find((cinema) => cinema.id === id);

const createCinema = async ({ id, adress, numberOfHalls }) => {
  const cinema = new Cinema({ id, adress, numberOfHalls });
  Cinemas.push(cinema);
  return cinema;
};

const deleteById = async (id) => {
  const CinemaPosition = Cinemas.findIndex((cinema) => cinema.id === id);

  if (CinemaPosition === -1) return null;

  const CinemaDeletable = Cinemas[CinemaPosition];

  Cinemas.splice(CinemaPosition, 1);
  return CinemaDeletable;
};

const updateById = async ({ id, adress, numberOfHalls }) => {
  const CinemaPosition = Cinemas.findIndex((cinema) => cinema.id === id);

  if (CinemaPosition === -1) return null;

  const oldCinema = Cinemas[CinemaPosition];
  const newCinema = { ...oldCinema, adress, numberOfHalls };

  Cinemas.splice(CinemaPosition, 1, newCinema);
  return newCinema;
};

export{
  Cinemas,
  getAll,
  getById,
  createCinema,
  deleteById,
  updateById,
};

