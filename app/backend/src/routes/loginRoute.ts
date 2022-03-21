import { Request, Response, Router } from 'express';
import * as asyncHandler from 'express-async-handler';
import { StatusCodes } from 'http-status-codes';
import { ILogin } from '../interfaces/login';
import LoginController from '../controllers/loginController';

export default class Login {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes(): void {
    this.router.post('/', asyncHandler(async (req: Request, res: Response) => {
      const { email, password }: ILogin = req.body;
      const loginInfo = await LoginController.login({ email, password });
      res.status(StatusCodes.OK).json(loginInfo);
    }));
  }
}
