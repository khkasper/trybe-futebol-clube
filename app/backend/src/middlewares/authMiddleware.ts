import { Request, Response, NextFunction } from 'express';
import JwtToken from '../utils/jwtToken';
import StatusMessages from '../enums/StatusMessages';
import { throwError, JWTError } from '../utils/error';

const authVerification = async (
  req: Request,
  _res: Response,
  next: NextFunction,
): Promise<void> => {
  const { authorization } = req.headers;

  if (!authorization) throwError(JWTError, StatusMessages.tokenNotFound);

  const verifiedToken = JwtToken.verify(authorization as string);

  if (!verifiedToken) throwError(JWTError, StatusMessages.invalidToken);

  const { role } = verifiedToken;

  req.body = { ...req.body, userRole: role };

  next();
};

export default authVerification;
