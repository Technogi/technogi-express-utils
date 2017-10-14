import * as express from 'express';

declare namespace technogiExpressUtils {
  function jsonErrorHandler(options?: any): express.ErrorRequestHandler
  function config(options?: any): express.RequestHandler 
}

export = technogiExpressUtils