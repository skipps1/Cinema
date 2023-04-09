import * as usersRepo from './user.memory.repository.js';

const getAll = () => usersRepo.getAll();

export { getAll };
