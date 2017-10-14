import { Request, Response, NextFunction } from 'express'
import * as debug from 'debug'

const log = debug('technogi:utils:error-handling')

export default (options?: any) => (error: any, req: Request, resp: Response, next: NextFunction) => {
  log('handling error {}', error)
  if (error.stack) {
    log(error)
  }

  return resp.status(error.status || 500).send({
    status: error.status || 500,
    code: error.name || error.code || 'SYSTEM_ERROR',
    message: error.message || 'undefined error',
  })
}