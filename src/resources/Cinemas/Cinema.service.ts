import { TCinemaModel } from './Cinema.type';
import * as cinemasRepo from './Cinema.memory.repository';
import * as ticketsRepo from '../Tickets/Ticket.memory.repository';

const getAll = (): Promise<(TCinemaModel | undefined)[]> => cinemasRepo.getAll();

const getById = (id: string): Promise<(TCinemaModel | undefined)> => cinemasRepo.getById(id);

const createCinema = ({ id, adress, numberOfHalls }: TCinemaModel): Promise<(TCinemaModel | undefined)> => cinemasRepo.createCinema({ id, adress, numberOfHalls });

const deleteById = async(id: string): Promise<(TCinemaModel | undefined)> => {
  const cinemaDeletable = await getById(id);
  cinemasRepo.deleteById(id);
  ticketsRepo.removeCinemaByID(id);

  return cinemaDeletable;
}

const updateById = ({ id, adress, numberOfHalls }: TCinemaModel): Promise<(TCinemaModel | undefined)> => {
  const cinema = cinemasRepo.updateById({ id, adress, numberOfHalls });
  return cinema;
}

export { getAll, getById, createCinema, deleteById, updateById };
