import { IMatch } from '../interfaces/match';
import MatchsRepository from '../repositories/matchsRepository';

export default class ClubsService {
  static async getAll(): Promise<IMatch[]> {
    const allMatchs = await MatchsRepository.getAll();
    return allMatchs;
  }
}
