import * as visitersRepo from './Visiter.memory.repository.js';
import * as ticketsRepo from '../Tickets/Ticket.memory.repository.js';

const getAll = () => visitersRepo.getAll();
const getById = (id) => visitersRepo.getById(id);
const createVisiter = ({ name, age }) =>
  visitersRepo.createVisiter({ name, age });
const deleteById = async (id) => {
  const VisiterDeletable = await getById(id);
  visitersRepo.deleteById(id);
  ticketsRepo.removeVisiterByID(id);
  return VisiterDeletable;
};
const updateById = ({ id, name, age }) =>
  visitersRepo.updateById({ id, name, age });

export { getAll, getById, createVisiter, deleteById, updateById };