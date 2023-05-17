import Ticket from './Ticket.model';
import { TTicketModel } from './Ticket.type';

const Tickets: (TTicketModel /*| undefined*/)[] = [new Ticket()];

const getAll = async (): Promise<(TTicketModel | undefined)[]> => Tickets;

const getById = async (id:string): Promise<(TTicketModel | undefined)> => Tickets.find((ticket) => id === ticket?.id);

const createTicket = async ({ id, seat, hall, filmName, duration, cinemaID, visiterID }:TTicketModel) => {
  const ticket = new Ticket({ id, seat, hall, filmName, duration, cinemaID, visiterID });
  Tickets.push(ticket);
  return ticket;
};

const deleteById = async (id: string): Promise<(TTicketModel | undefined)> => {
  const TicketPosition = Tickets.findIndex((ticket) => id === ticket?.id);

  if (TicketPosition === -1) return undefined;

  const TicketDeletable = Tickets[TicketPosition];

  Tickets.splice(TicketPosition, 1);
  return TicketDeletable;
};
const removeCinemaByID = async (id:string) => {
  const TicketPosition = Tickets.findIndex((ticket) => ticket?.cinemaID === id);

  if (TicketPosition === -1) return null;

  const TicketDeletable = Tickets[TicketPosition];

  Tickets.splice(TicketPosition, 1);
  return TicketDeletable;
};

const updateById = async ({ id, seat, hall, filmName, duration, cinemaID,visiterID }:TTicketModel): Promise<(TTicketModel | undefined)> => {
  const TicketPosition = Tickets.findIndex((ticket) => ticket?.id === id);

  if (TicketPosition === -1) return undefined;

  const oldTicket = Tickets[TicketPosition];
  const newTicket = { ...oldTicket,id, seat, hall, filmName, duration, cinemaID, visiterID  };

  Tickets.splice(TicketPosition, 1, newTicket);
  return newTicket;
};

const removeVisiterByID = async (id:string) => {
  const visterTickets = Tickets.filter((ticket) => ticket?.visiterID === id);

  await Promise.allSettled(
    visterTickets.map(async (ticket) => updateById({ id: ticket.id, visiterID: undefined }))
  );
};

export{
  Tickets,
  getAll,
  getById,
  createTicket,
  deleteById,
  updateById,
  removeVisiterByID,
  removeCinemaByID
};