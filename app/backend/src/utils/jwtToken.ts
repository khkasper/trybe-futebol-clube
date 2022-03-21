import { readFileSync } from 'fs';
import { sign, verify, SignOptions } from 'jsonwebtoken';
import { UserWithoutPassword } from '../interfaces/login';

const jwtSecret = readFileSync('./jwt.evaluation.key');
const jwtConfig: SignOptions = { expiresIn: '1h', algorithm: 'HS256' };

export default class JwtToken {
  static generate(user: UserWithoutPassword): string {
    return sign(user, jwtSecret, jwtConfig);
  }

  static verify(token: string): UserWithoutPassword {
    return verify(token, jwtSecret) as UserWithoutPassword;
  }
}
