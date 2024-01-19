import { getAll } from '../../repositories/users/users.js';

export function getUsers (req, res, next) {
  res.send(getAll());
}