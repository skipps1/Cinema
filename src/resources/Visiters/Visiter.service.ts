import { TVisiterModel } from './Visiter.type';
import * as visitersRepo from './Visiter.memory.repository';
import * as ticketsRepo from '../Tickets/Ticket.memory.repository';

const getAll = (): Promise<(TVisiterModel )[]> => visitersRepo.getAll();

const getById = (id: string): Promise<(TVisiterModel | undefined)> => visitersRepo.getById(id);

const createVisiter = ({ id, name, age }: TVisiterModel): Promise<(TVisiterModel | undefined)> => visitersRepo.createVisiter({ id, name, age });

const deleteById = async(id: string): Promise<(TVisiterModel | undefined)> => {
  const VisiterDeletable = await getById(id);
  visitersRepo.deleteById(id);
  ticketsRepo.removeVisiterByID(id);
  return VisiterDeletable;
}

const updateById = ({ id, name, age }: TVisiterModel): Promise<(TVisiterModel | undefined)> => {
  const visiter = visitersRepo.updateById({ id, name, age });
  return visiter;
}

export { getAll, getById, createVisiter, deleteById, updateById };