import * as ticketsRepo from './Ticket.memory.repository.js';

const getAll = () => ticketsRepo.getAll();
const getById = (id) => ticketsRepo.getById(id);
const createTicket = ({ seat, hall, filmName, duration, visiterID }) =>
  ticketsRepo.createTicket({ seat, hall, filmName, duration, visiterID });
const deleteById = async (id) => {
  const TicketDeletable = await getById(id);
  ticketsRepo.deleteById(id);
  return TicketDeletable;
};
const updateById = ({ id, seat, hall, filmName, duration, visiterID }) =>
  ticketsRepo.updateById({ id, seat, hall, filmName, duration, visiterID });

export { getAll, getById, createTicket, deleteById, updateById };