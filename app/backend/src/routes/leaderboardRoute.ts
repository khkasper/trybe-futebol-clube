import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import ILeaderboard from '../interfaces/leaderboard';
import LeaderboardController from '../controllers/leaderboardController';

export default class Leaderboard {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes(): void {
    this.router.get('/:homeOrAway', async (req: Request, res: Response) => {
      const { homeOrAway } = req.params;
      const leaderboard: ILeaderboard[] = await LeaderboardController.getLeaderboard(homeOrAway);
      res.status(StatusCodes.OK).json(leaderboard);
    });

    this.router.get('/', async (_req: Request, res: Response) => {
      const leaderboard: ILeaderboard[] = await LeaderboardController.getLeaderboard('both');
      res.status(StatusCodes.OK).json(leaderboard);
    });
  }
}
