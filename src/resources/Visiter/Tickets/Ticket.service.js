import * as ticketsRepo from './Ticket.memory.repository';

const getAll = () => ticketsRepo.getAll();
const getById = (id) => ticketsRepo.getById(id);
const createTicket = ({ name, Age }) =>
  ticketsRepo.createTicket({ name, Age });
const deleteById = async (id) => {
  const TicketDeletable = await getById(id);
  ticketsRepo.deleteById(id);

  return TicketDeletable;
};
const updateById = ({ id, Seat, Hall, Film_name, Duration, Vname }) =>
  ticketsRepo.updateById({ id, Seat, Hall, Film_name, Duration, Vname });

export { getAll, getById, createTicket, deleteById, updateById };