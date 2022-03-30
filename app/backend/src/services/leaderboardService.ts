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

    if (homeOrAway === 'both') {
      matchs.forEach((match) => {
        lboard[match.homeTeam - 1] = Board.update(match, lboard[match.homeTeam - 1], 'home');
        lboard[match.awayTeam - 1] = Board.update(match, lboard[match.awayTeam - 1], 'away');
      });
      return Board.sort(lboard);
    }

    matchs.forEach((match) => {
      let i: number;

      if (homeOrAway === 'home') i = match.homeTeam - 1;
      else i = match.awayTeam - 1;

      lboard[i] = Board.update(match, lboard[i], homeOrAway);
    });

    return Board.sort(lboard);
  }
}
