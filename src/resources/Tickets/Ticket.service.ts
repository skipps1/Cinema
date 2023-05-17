import { TTicketModel } from './Ticket.type';
import * as ticketsRepo from './Ticket.memory.repository';

const getAll = (): Promise<(TTicketModel | undefined)[]> => ticketsRepo.getAll();

const getById = (id: string): Promise<(TTicketModel | undefined)> => ticketsRepo.getById(id);

const createTicket = ({ id, seat, hall, filmName, cinemaID, duration, visiterID }: TTicketModel): Promise<(TTicketModel | undefined)> => ticketsRepo.createTicket({ id, seat, hall, filmName, duration, cinemaID, visiterID });

const deleteById = (id: string): Promise<(TTicketModel | undefined)> => {
  const ticket = ticketsRepo.deleteById(id);
  return ticket;
}

const updateById = ({ id, seat, hall, filmName, cinemaID, duration, visiterID }: TTicketModel): Promise<(TTicketModel | undefined)> => {
  const ticket = ticketsRepo.updateById({ id, seat, hall, filmName, duration, cinemaID, visiterID });
  return ticket;
}
export { getAll, getById, createTicket, deleteById, updateById };
