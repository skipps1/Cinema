import Cinema from './Cinema.model';

const Cinemas = [new Cinema()];

const getAll = async () => Cinemas;
  
const getById = async (id) => Cinemas.find((Cinema) => Cinema.id === id);

const createCinema = async ({ id, Adress, Num_of_halls }) => {
  const cinema = new Cinema({ id, Adress, Num_of_halls });
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

const updateById = async ({ id, Adress, Num_of_halls }) => {
  const CinemaPosition = Cinemas.findIndex((cinema) => cinema.id === id);

  if (CinemaPosition === -1) return null;

  const oldCinema = Cinemas[CinemaPosition];
  const newCinema = { ...oldCinema, Adress, Num_of_halls };

  Cinemas.splice(CinemaPosition, 1, newCinema);
  return newCinema;
};

module.exports = {
  Cinemas,
  getAll,
  getById,
  createCinema,
  deleteById,
  updateById,
};

export { getAll };
