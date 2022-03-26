import ClubsRepository from '../repositories/clubsRepository';
import MatchsRepository from '../repositories/matchsRepository';
import ILeaderboard from '../interfaces/leaderboard';
import Board from '../utils/leaderboard';

export default class LeaderboardService {
  static async getLeaderboard(homeOrAway: string): Promise<ILeaderboard[]> {
    const matchs = await MatchsRepository.getAllFinished();
    const clubs = await ClubsRepository.getAll();
    let lboard: ILeaderboard[] = [];
    lboard = Board.generate(clubs, lboard);

    matchs.forEach((match) => {
      let i: number;

      if (homeOrAway === 'home') i = match.homeTeam - 1;
      else i = match.awayTeam - 1;

      lboard[i] = Board.make(match, lboard[i], homeOrAway);
    });

    return Board.sorted(lboard);
  }
}
