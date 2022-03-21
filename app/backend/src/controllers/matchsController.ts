import { IMatch } from '../interfaces/match';
import MatchsService from '../services/matchsService';

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
    const match = await MatchsService.create(body);
    return match;
  }

  static async updateInProgress(id: string): Promise<void> {
    await MatchsService.updateInProgress(id);
  }
}
