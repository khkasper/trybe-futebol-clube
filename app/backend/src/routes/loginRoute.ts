import { Request, Response, Router } from 'express';
import * as asyncHandler from 'express-async-handler';
import { StatusCodes } from 'http-status-codes';
import { ILogin } from '../interfaces/login';
import LoginController from '../controllers/loginController';
import authVerification from '../middlewares/authMiddleware';

export default class Login {
  router: Router;

  constructor() {
    this.router = Router();
    this.routeGet();
    this.routePost();
  }

  private routeGet(): void {
    this.router.get(
      '/validate',
      authVerification,
      asyncHandler(async (req: Request, res: Response) => {
        const { userRole } = req.body;
        res.status(StatusCodes.OK).json(userRole);
      }),
    );
  }

  private routePost(): void {
    this.router.post('/', asyncHandler(async (req: Request, res: Response) => {
      const { email, password }: ILogin = req.body;
      const loginInfo = await LoginController.login({ email, password });
      res.status(StatusCodes.OK).json(loginInfo);
    }));
  }
}
