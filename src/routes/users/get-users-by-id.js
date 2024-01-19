import { fakeUsersDb } from './get-users.js';

export function getUserById (req, res, next) {
  const user = fakeUsersDb.find(u => u.id == req.params.id);

  res.send(user);
}