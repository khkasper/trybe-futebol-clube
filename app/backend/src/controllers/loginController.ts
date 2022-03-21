import { ILogin, ILoginResponse } from '../interfaces/login';
import LoginService from '../services/loginService';
import LoginValidation from '../validations/loginValidation';

export default class LoginController {
  static async login({ email, password }: ILogin): Promise<ILoginResponse> {
    const validated = await LoginValidation.validate({ email, password });
    const result = await LoginService.login(validated as ILogin);
    return result;
  }
}
