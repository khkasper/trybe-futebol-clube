import { IClub } from '../interfaces/clubs';
import ClubsService from '../services/clubsService';

export default class ClubsController {
  static async getAll(): Promise<IClub[]> {
    const allTeams = await ClubsService.getAll();
    return allTeams;
  }

  static async getById(id: number): Promise<IClub> {
    const team = await ClubsService.getById(id);
    return team;
  }
}
