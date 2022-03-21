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

  static async getAllInProgress(inProgress: boolean): Promise<IMatch[]> {
    const allMatchs = await MatchModel.findAll({
      where: { inProgress },
      include: [
        { model: ClubModel, as: 'awayClub', attributes: ['clubName'] },
        { model: ClubModel, as: 'homeClub', attributes: ['clubName'] },
      ],
    });
    return allMatchs as unknown as IMatch[];
  }

  static async create(matchInfo: IMatch): Promise<IMatch> {
    const match = await MatchModel.create(matchInfo);
    return match as unknown as IMatch;
  }

  static async updateInProgress(id: string): Promise<void> {
    await MatchModel.update({ inProgress: false }, { where: { id } });
  }
}
