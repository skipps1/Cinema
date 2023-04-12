import * as visitersRepo from './Visiter.memory.repository';
import * as ticketsRepo from '../Tickets/Ticket.memory.repository';

const getAll = () => visitersRepo.getAll();
const getById = (id) => visitersRepo.getById(id);
const createVisiter = ({ name, Age }) =>
  visitersRepo.createVisiter({ name, Age });
const deleteById = async (id) => {
  const VisiterDeletable = await getById(id);
  visitersRepo.deleteById(id);
  ticketsRepo.removeVisiterByName(Name);

  return VisiterDeletable;
};
const updateById = ({ id, name, Age }) =>
  visitersRepo.updateById({ id, name, Age });

export { getAll, getById, createVisiter, deleteById, updateById };