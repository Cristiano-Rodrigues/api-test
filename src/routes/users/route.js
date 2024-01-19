import { getUsers } from './getUsers.js'

export default router => {
  return router.get('/users', getUsers);
}