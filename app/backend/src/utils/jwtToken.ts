import { readFileSync } from 'fs';
import { sign, verify, SignOptions } from 'jsonwebtoken';
import { UserWithoutPassword } from '../interfaces/login';

const jwtSecret = readFileSync('./jwt.evaluation.key');
const jwtConfig: SignOptions = { expiresIn: '1h', algorithm: 'HS256' };

export default class JwtToken {
  static async generate(user: UserWithoutPassword): Promise<string> {
    return sign(user, jwtSecret, jwtConfig);
  }

  static async verify(token: string): Promise<UserWithoutPassword | undefined> {
    try {
      return verify(token, jwtSecret) as UserWithoutPassword;
    } catch (error) {
      return undefined;
    }
  }
}
