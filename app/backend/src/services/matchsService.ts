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
}
