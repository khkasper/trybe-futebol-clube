import { IClub } from '../interfaces/clubs';
import ClubsRepository from '../repositories/clubsRepository';

export default class ClubsService {
  static async getAll(): Promise<IClub[]> {
    const allTeams = await ClubsRepository.getAll();
    return allTeams;
  }

  static async getById(id: number): Promise<IClub> {
    const team = await ClubsRepository.getById(id);
    return team;
  }
}
