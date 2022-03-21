import { IMatch } from '../interfaces/match';
import MatchModel from '../database/models/Match';
import ClubModel from '../database/models/Club';

export default class ClubsRepository {
  static async getAll(): Promise<IMatch[]> {
    const allMatchs = await MatchModel.findAll({
      include: [
        { model: ClubModel, as: 'awayClub', attributes: ['clubName'] },
        { model: ClubModel, as: 'homeClub', attributes: ['clubName'] },
      ],
    });
    return allMatchs as unknown as IMatch[];
  }
}