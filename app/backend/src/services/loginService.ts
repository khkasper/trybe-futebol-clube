import LoginRepository from '../repositories/loginRepository';
import JwtToken from '../utils/jwtToken';
import comparePassword from '../utils/bcrypt';
import { IUser, ILogin, ILoginResponse, UserWithoutPassword } from '../interfaces/login';
import UnauthoziredError from '../utils/Errors/unauthorized';
import StatusMessages from '../enums/StatusMessages';

export default class LoginService {
  static async login({ email, password }: ILogin): Promise<ILoginResponse> {
    const user = await LoginRepository.getByEmail(email) as IUser;

    if (!user) throw new UnauthoziredError(StatusMessages.incorrectMailOrPass);

    const comparedPassword = await comparePassword(password, user.password);

    if (!comparedPassword) throw new UnauthoziredError(StatusMessages.incorrectMailOrPass);

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
