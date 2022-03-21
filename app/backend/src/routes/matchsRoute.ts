import { Request, Response, Router } from 'express';
import * as asyncHandler from 'express-async-handler';
import { StatusCodes } from 'http-status-codes';
import { IMatch } from '../interfaces/match';
import MatchsController from '../controllers/matchsController';
import authVerification from '../middlewares/authMiddleware';

export default class Matchs {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes(): void {
    this.router.get('/', asyncHandler(async (req: Request, res: Response) => {
      const { inProgress } = req.query;
      let allMatchs: IMatch[];

      if (!inProgress) allMatchs = await MatchsController.getAll();
      else allMatchs = await MatchsController.getAllInProgress(inProgress === 'true');

      res.status(StatusCodes.OK).json(allMatchs);
    }));

    this.router.post('/', authVerification, asyncHandler(async (req: Request, res: Response) => {
      const match = await MatchsController.create(req.body);
      res.status(StatusCodes.CREATED).json(match);
    }));
  }
}
