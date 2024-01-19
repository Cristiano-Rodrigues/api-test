import { ok } from './ok.js'

export default router => {
  return router.get('/ok', ok);
}