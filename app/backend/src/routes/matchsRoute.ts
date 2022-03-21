import { Request, Response, Router } from 'express';
import * as asyncHandler from 'express-async-handler';
import { StatusCodes } from 'http-status-codes';
import { IMatch } from '../interfaces/match';
import MatchsController from '../controllers/matchsController';

export default class Matchs {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes(): void {
    this.router.get('/', asyncHandler(async (_req: Request, res: Response) => {
      const allMatchs: IMatch[] = await MatchsController.getAll();
      res.status(StatusCodes.OK).json(allMatchs);
    }));
  }
}
