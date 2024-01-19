import { getById } from '../../repositories/users/users.js';

export function getUserById (req, res, next) {
  const user = getById(req.params.id);

  res.send(user);
}