import { IMatch } from '../interfaces/match';
import MatchsService from '../services/matchsService';
import MatchValidation from '../validations/matchValidation';

export default class ClubsController {
  static async getAll(): Promise<IMatch[]> {
    const allMatchs = await MatchsService.getAll();
    return allMatchs;
  }

  static async getAllInProgress(inProgress: boolean): Promise<IMatch[]> {
    const allMatchs = await MatchsService.getAllInProgress(inProgress);
    return allMatchs;
  }

  static async create(body: IMatch): Promise<IMatch> {
    const { homeTeam, homeTeamGoals, awayTeam, awayTeamGoals, inProgress } = body;
    const validated = await MatchValidation.validate({
      homeTeam,
      homeTeamGoals,
      awayTeam,
      awayTeamGoals,
      inProgress,
    });
    const match = await MatchsService.create(validated);
    return match;
  }

  static async updateInProgress(id: string): Promise<void> {
    await MatchsService.updateInProgress(id);
  }
}
