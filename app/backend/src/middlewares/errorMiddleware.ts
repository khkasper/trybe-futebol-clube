import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const errorHandlerMiddleware = (err: Error, _req: Request, res: Response, next: NextFunction) => {
  const { name, message } = err as Error;

  switch (name) {
    case 'BadRequestError':
      res.status(StatusCodes.BAD_REQUEST).json({ message });
      break;
    case 'JWTError':
      res.status(StatusCodes.BAD_REQUEST).json({ message });
      break;
    case 'ValidationError':
      res.status(StatusCodes.UNAUTHORIZED).json({ message });
      break;
    default:
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message });
  }

  next();
};

export default errorHandlerMiddleware;
