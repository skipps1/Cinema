import Ticket from './Ticket.model.js';

const Tickets = [new Ticket()];

const getAll = async () => Tickets;

const getById = async (id) => Tickets.find((ticket) => ticket.id === id);

const createTicket = async ({ id, seat, hall, filmName, duration, visiterID }) => {
  const ticket = new Ticket({ id, seat, hall, filmName, duration, visiterID });
  Tickets.push(ticket);
  return ticket;
};

const deleteById = async (id) => {
  const TicketPosition = Tickets.findIndex((ticket) => ticket.id === id);

  if (TicketPosition === -1) return null;

  const TicketDeletable = Tickets[TicketPosition];

  Tickets.splice(TicketPosition, 1);
  return TicketDeletable;
};
const removeCinemaByID = async (id) => {
  const TicketPosition = Tickets.findIndex((ticket) => ticket.cinemaID === id);

  if (TicketPosition === -1) return null;

  const TicketDeletable = Tickets[TicketPosition];

  Tickets.splice(TicketPosition, 1);
  return TicketDeletable;
};

const updateById = async ({ id, seat, hall, filmName, duration }) => {
  const TicketPosition = Tickets.findIndex((ticket) => ticket.id === id);

  if (TicketPosition === -1) return null;

  const oldTicket = Tickets[TicketPosition];
  const newTicket = { ...oldTicket, seat, hall, filmName, duration };

  Tickets.splice(TicketPosition, 1, newTicket);
  return newTicket;
};

const removeVisiterByID = async (id) => {
  const visterTickets = Tickets.filter((ticket) => ticket.visiterID === id);

  await Promise.allSettled(
    visterTickets.map(async (ticket) => updateById({ id: ticket.id, visiterID: null }))
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