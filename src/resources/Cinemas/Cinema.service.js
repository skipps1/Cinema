import * as cinemasRepo from './Cinema.memory.repository.js';
import * as ticketsRepo from '../Tickets/Ticket.memory.repository.js';

const getAll = () => cinemasRepo.getAll();
const getById = (id) => cinemasRepo.getById(id);
const createCinema = ({ id, adress, numberOfHalls }) =>
  cinemasRepo.createCinema({ id, adress, numberOfHalls });
const deleteById = async (id) => {
  const cinemaDeletable = await getById(id);
  cinemasRepo.deleteById(id);
  ticketsRepo.removeCinemaByID(id);

  return cinemaDeletable;
};
const updateById = ({ id, adress, numberOfHalls }) =>
  cinemasRepo.updateById({ id, adress, numberOfHalls });

export { getAll, getById, createCinema, deleteById, updateById };
