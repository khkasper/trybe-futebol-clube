import { IClub } from '../interfaces/clubs';
import ClubModel from '../database/models/Club';

export default class ClubsRepository {
  static async getAll(): Promise<IClub[]> {
    const allTeams = await ClubModel.findAll();
    return allTeams as unknown as IClub[];
  }

  static async getById(id: number): Promise<IClub> {
    const allTeams = await ClubModel.findByPk(id);
    return allTeams as unknown as IClub;
  }
}
