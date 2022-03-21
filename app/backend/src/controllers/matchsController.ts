import { IMatch } from '../interfaces/match';
import MatchsService from '../services/matchsService';

export default class ClubsController {
  static async getAll(): Promise<IMatch[]> {
    const allMatchs = await MatchsService.getAll();
    return allMatchs;
  }
}
