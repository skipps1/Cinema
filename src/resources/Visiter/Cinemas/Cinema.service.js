import * as cinemasRepo from './Cinema.memory.repository';
import * as ticketsRepo from '../Tickets/Ticket.memory.repository';


const boardsRepo = require('./board.memory.repository');
const tasksRepo = require('../tasks/task.memory.repository');

const getAll = () => cinemasRepo.getAll();
const getById = (id) => cinemasRepo.getById(id);
const createCinema = ({ id, Adress, Num_of_halls }) =>
  cinemasRepo.createCinema({ id, Adress, Num_of_halls });
const deleteById = async (id) => {
  const CinemaDeletable = await getById(id);
  cinemasRepo.deleteById(id);
  ticketsRepo.removeCinemaByAdress(Adress);

  return boardDeletable;
};
const updateById = ({ id, Adress, Num_of_halls }) =>
  boardsRepo.updateById({ id, Adress, Num_of_halls });

module.exports = { getAll, getById, createCinema, deleteById, updateById };
