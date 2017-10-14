import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'

export default (options?: JWTDeserializerOptions) =>
  (req: Request, res: Response, next: NextFunction) => {

    let token = loadToken(req)
    jwt.verify(token,res.locals.property('jwt'),(err:any, resp: any)=>{
      next();
    })
    
  }

export class JWTDeserializerOptions {
  constructor(readonly props?: any) { }
}


//function deserialize(req, res, next) {
//  debug('Deserialzing token');
//  let token = loadToken(req);
//  debug('Got token', token);
//  if (!token) return next();
//
//  jwt.verify(token, secret, (error, auth) => {
//    if (error) {
//      debug('Got Invalid token ', token);
//      return unAuthorized(next, 'Invalid token');
//    }
//    debug('Got Valid Token');
//    req.userId = auth.subject;
//    req.auth = auth;
//    next();
//  });
//}

function loadToken(req: Request): string {
  //let token = req.headers[tokenHeader];
  //if (!token) return null;
  //if (token.lenght <= tokenType.length + 1) return null;
  //return token.substr(tokenType.length + 1);
  return ''
}
