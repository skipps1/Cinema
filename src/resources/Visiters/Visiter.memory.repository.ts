import Visiter from './Visiter.model';
import { TVisiterModel } from './Visiter.type';

const Visiters: (TVisiterModel | undefined)[]  = [new Visiter()];

const getAll = async (): Promise<(TVisiterModel | undefined)[]> => Visiters;

const getById = async (id:string): Promise<(TVisiterModel | undefined)> => Visiters.find((visiter) => id === visiter?.id);

const createVisiter = async ({ id, name, age }: TVisiterModel): Promise<TVisiterModel> => {
  const visiter = new Visiter({ id, name, age });
  Visiters.push(visiter);
  return visiter;
};

const deleteById = async (id: string): Promise<(TVisiterModel | undefined)> => {
  const VisiterPosition = Visiters.findIndex((visiter) => id === visiter?.id);

  if (VisiterPosition === -1) return undefined;

  const VisiterDeletable = Visiters[VisiterPosition];

  Visiters.splice(VisiterPosition, 1);
  return VisiterDeletable;
};

const updateById = async ({ id, name, age }:TVisiterModel): Promise<(TVisiterModel | undefined)> => {
  const VisiterPosition = Visiters.findIndex((visiter) => id === visiter?.id);

  if (VisiterPosition === -1) return undefined;

  const oldVisiter = Visiters[VisiterPosition];
  const newVisiter = { ...oldVisiter, id, name, age }; // убрать TicketID

  Visiters.splice(VisiterPosition, 1, newVisiter);
  return newVisiter;
};

export {
  Visiters,
  getAll,
  getById,
  createVisiter,
  deleteById,
  updateById,
};
