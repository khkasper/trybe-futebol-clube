import { readFileSync } from 'fs';
import { sign, verify, SignOptions } from 'jsonwebtoken';
import { UserWithoutPassword } from '../domain';

const jwtSecret = readFileSync('./jwt.evaluation.key');
const jwtConfig: SignOptions = { expiresIn: '1h', algorithm: 'HS256' };

export const generateToken = async (user: UserWithoutPassword): Promise<string> => {
  const token = sign(user, jwtSecret, jwtConfig);
  return token;
};

export const verifyToken = async (token: string): Promise<UserWithoutPassword> => {
  const verifiedToken = verify(token, jwtSecret);
  return verifiedToken as UserWithoutPassword;
};
