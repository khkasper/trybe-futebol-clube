import UserModel from '../database/models/User';
import { IUser } from '../interfaces/login';

export default class LoginRepository {
  static async getByEmail(email: IUser['email']): Promise<IUser> {
    const user = await UserModel.findOne({ where: { email }, raw: true });
    return user as unknown as IUser;
  }
}
