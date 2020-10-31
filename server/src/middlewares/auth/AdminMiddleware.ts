import { Request, Response, NextFunction } from 'express';
const jwt = require('jsonwebtoken');
require('dotenv').config();

const AdminMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const auth = req.headers.authorization;

  if (!auth) {
    return res.status(401).json({ error: { message: 'No token provided.' } });
  }

  const parts = auth.split(' ');

  if (!(parts.length === 2)) {
    return res.status(401).json({ error: { message: 'Token error.'} });
  }

  const [ scheme, token ] = parts;
  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).json({ error: { message: 'Token malformatted.' } });
  }

  try {
    const secret = process.env.TOKEN_ADMIN_SECRET;

    const payload = <any>jwt.verify(token, secret as string);
    
    const adminId = payload.id;

    res.locals.adminId = adminId;

    return next();

  } catch {

    res.status(401).send({ error: 'Invalid Token.' });

  }
};

export default AdminMiddleware;