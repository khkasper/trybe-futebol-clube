import UnauthoziredError from '../utils/Errors/unauthorized';
import { IMatch, IScorePayload } from '../interfaces/match';
import MatchsRepository from '../repositories/matchsRepository';
import StatusMessages from '../enums/StatusMessages';

export default class ClubsService {
  static async getAll(): Promise<IMatch[]> {
    const allMatchs = await MatchsRepository.getAll();
    return allMatchs;
  }

  static async getAllInProgress(inProgress: boolean): Promise<IMatch[]> {
    const allMatchs = await MatchsRepository.getAllInProgress(inProgress);
    return allMatchs;
  }

  static async create(validated: IMatch): Promise<IMatch> {
    const { homeTeam, homeTeamGoals, awayTeam, awayTeamGoals, inProgress } = validated;

    if (homeTeam === awayTeam) throw new UnauthoziredError(StatusMessages.noEqualTeams);

    const match = await MatchsRepository.create({
      homeTeam,
      awayTeam,
      homeTeamGoals,
      awayTeamGoals,
      inProgress,
    });
    return match;
  }

  static async updateInProgress(id: string): Promise<void> {
    await MatchsRepository.updateInProgress(id);
  }

  static async update(id: string, { homeTeamGoals, awayTeamGoals }: IScorePayload): Promise<void> {
    await MatchsRepository.update(id, { homeTeamGoals, awayTeamGoals });
  }
}
