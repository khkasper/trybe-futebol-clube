import { Request, Response, Router } from 'express';
import * as asyncHandler from 'express-async-handler';
import { StatusCodes } from 'http-status-codes';
import { IClub } from '../interfaces/clubs';
import ClubsController from '../controllers/clubsController';

export default class Clubs {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes(): void {
    this.router.get('/', asyncHandler(async (_req: Request, res: Response) => {
      const allTeams: IClub[] = await ClubsController.getAll();
      res.status(StatusCodes.OK).json(allTeams);
    }));

    this.router.get('/:id', asyncHandler(async (req: Request, res: Response) => {
      const { id } = req.params;
      const team: IClub = await ClubsController.getById(+id);
      res.status(StatusCodes.OK).json(team);
    }));
  }
}
