import Ticket from './Ticket.model';

const Tickets = [new Ticket()];

const getAll = async () => Tickets;

const getById = async (id) => Tickets.find((ticket) => ticket.id === id);

const createTicket = async ({ id, Seat, Hall, Film_name, Adress, Duration, Vname }) => {
  const ticket = new Ticket({ id, Seat, Hall, Film_name, Adress, Duration, Vname });
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
const removeCinemaByAdress = async (Adress) => {
  const TicketPosition = Tickets.findIndex((ticket) => ticket.Adress === Adress);

  if (TicketPosition === -1) return null;

  const TicketDeletable = Tickets[TicketPosition];

  Tickets.splice(TicketPosition, 1);
  return TicketDeletable;
};

const removeVisiterByName = async (Name) => {
  const visterTickets = Tickets.filter((ticket) => ticket.Vname === Name);

  await Promise.allSettled(
    visterTickets.map(async (ticket) => updateById({ id: ticket.id, Vname: null }))
  );
};

const updateById = async ({ id, Seat, Hall, Film_name, Duration }) => {
  const TicketPosition = Tickets.findIndex((ticket) => ticket.id === id);

  if (TicketPosition === -1) return null;

  const oldTicket = Tickets[TicketPosition];
  const newTicket = { ...oldTicket, Seat, Hall, Film_name, Duration };

  Tickets.splice(TicketPosition, 1, newTicket);
  return newTicket;
};

export{
  Tickets,
  getAll,
  getById,
  createTicket,
  deleteById,
  updateById,
  removeVisiterByName,
  removeCinemaByAdress
};