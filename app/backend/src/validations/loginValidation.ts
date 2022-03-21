import * as Joi from 'joi';
import StatusMessages from '../enums/StatusMessages';
import { ILogin } from '../interfaces/login';

export default class Login {
  static async validation(body: ILogin): Promise<ILogin> {
    const schema = Joi.object<ILogin>({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
    }).messages({
      'any.required': StatusMessages.allFields,
      'string.empty': StatusMessages.allFields,
      'string.email': StatusMessages.incorrectMailOrPass,
      'string.min': StatusMessages.incorrectMailOrPass,
    });
    const result = await schema.validateAsync(body);
    return result as ILogin;
  }
}
