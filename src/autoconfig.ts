import { Request, Response, NextFunction } from 'express'

export default (options?: ConfigOptions) =>
  (req: Request, res: Response, next: NextFunction) => {
    next();
  }

export class ConfigOptions {
  constructor(readonly props?: any) { }
}