const Ticket = require('./ticket.model');

const Tickets = [new Ticket()];

const getAll = async () => Tickets;

const getById = async (id) => Tickets.find((ticket) => ticket.id === id);

const createTicket = async ({ id, Seat, Hall, Film_name, Adress, Duration }) => {
  const ticket = new Ticket({ id, Seat, Hall, Film_name, Adress, Duration });
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

const updateById = async ({ id, Seat, Hall, Film_name, Adress, Duration }) => {
  const TicketPosition = Tickets.findIndex((ticket) => ticket.id === id);

  if (TicketPosition === -1) return null;

  const oldTicket = Tickets[TicketPosition];
  const newTicket = { ...oldTicket, Seat, Hall, Film_name, Adress, Duration };

  Tickets.splice(TicketPosition, 1, newTicket);
  return newTicket;
};

module.exports = {
  Tickets,
  getAll,
  getById,
  createTicket,
  deleteById,
  updateById,
};