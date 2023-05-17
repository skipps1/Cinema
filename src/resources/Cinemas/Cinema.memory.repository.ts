import Cinema from './Cinema.model';
import { TCinemaModel } from './Cinema.type';

const Cinemas: (TCinemaModel | undefined)[] = [new Cinema()];

const getAll = async (): Promise<(TCinemaModel | undefined)[]> => Cinemas;
  
const getById = async (id: string): Promise<(TCinemaModel | undefined)> => Cinemas.find((cinema) => id === cinema?.id);

const createCinema = async ({ id, adress, numberOfHalls }:TCinemaModel) => {
  const cinema = new Cinema({ id, adress, numberOfHalls });
  Cinemas.push(cinema);
  return cinema;
};

const deleteById = async (id:string): Promise<(TCinemaModel | undefined)> => {
  const CinemaPosition = Cinemas.findIndex((cinema) => id === cinema?.id);

  if (CinemaPosition === -1) return undefined;

  const CinemaDeletable = Cinemas[CinemaPosition];

  Cinemas.splice(CinemaPosition, 1);
  return CinemaDeletable;
};

const updateById = async ({ id, adress, numberOfHalls }:TCinemaModel): Promise<(TCinemaModel | undefined)> => {
  const CinemaPosition = Cinemas.findIndex((cinema) => id === cinema?.id);

  if (CinemaPosition === -1) return undefined;

  const oldCinema = Cinemas[CinemaPosition];
  const newCinema = { ...oldCinema,id, adress, numberOfHalls };

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

