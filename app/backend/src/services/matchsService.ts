import { IMatch } from '../interfaces/match';
import MatchsRepository from '../repositories/matchsRepository';

export default class ClubsService {
  static async getAll(): Promise<IMatch[]> {
    const allMatchs = await MatchsRepository.getAll();
    return allMatchs;
  }

  static async getAllInProgress(inProgress: boolean): Promise<IMatch[]> {
    const allMatchs = await MatchsRepository.getAllInProgress(inProgress);
    return allMatchs;
  }

  static async create(body: IMatch): Promise<IMatch> {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress } = body;
    const match = await MatchsRepository.create({
      homeTeam,
      awayTeam,
      homeTeamGoals,
      awayTeamGoals,
      inProgress,
    });
    return match;
  }
}
