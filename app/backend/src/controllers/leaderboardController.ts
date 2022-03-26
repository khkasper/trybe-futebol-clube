import ILeaderboard from '../interfaces/leaderboard';
import LeaderboardService from '../services/leaderboardService';

export default class LeaderboardController {
  static async getLeaderboard(homeOrAway: string): Promise<ILeaderboard[]> {
    const leaderboard = await LeaderboardService.getLeaderboard(homeOrAway);
    return leaderboard;
  }
}
