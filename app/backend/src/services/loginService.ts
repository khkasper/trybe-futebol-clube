import LoginRepository from '../repositories/loginRepository';
import JwtToken from '../utils/jwtToken';
import comparePassword from '../utils/bcrypt';
import { IUser, ILogin, ILoginResponse, UserWithoutPassword } from '../interfaces/login';
import { throwError, JWTError } from '../utils/error';
import StatusMessages from '../enums/StatusMessages';

export default class LoginService {
  static async login({ email, password }: ILogin): Promise<ILoginResponse> {
    const user = await LoginRepository.getByEmail(email) as IUser;

    if (!user) throwError(JWTError, StatusMessages.incorrectMailOrPass);

    const comparedPassword = await comparePassword(password, user.password);

    if (!comparedPassword) throwError(JWTError, StatusMessages.incorrectMailOrPass);

    const userWithoutPassword: UserWithoutPassword = {
      id: user.id,
      username: user.username,
      role: user.role,
      email: user.email,
    };
    const token = JwtToken.generate(userWithoutPassword);
    return {
      user: { ...userWithoutPassword },
      token,
    };
  }
}
