import { getUsers } from './get-users.js'
import { getUserById } from './get-users-by-id.js';

export default router => {
  router.get('/users', getUsers);
  router.get('/users/:id', getUserById);

  return router;
}