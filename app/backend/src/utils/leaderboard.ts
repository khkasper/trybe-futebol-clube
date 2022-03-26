import { IMatch } from '../interfaces/match';
import { IClub } from '../interfaces/clubs';
import ILeaderboard from '../interfaces/leaderboard';

export default class Board {
  static generate(clubs: IClub[], board: ILeaderboard[]) {
    clubs.forEach((club) => {
      const team: ILeaderboard = {
        name: club.clubName,
        totalPoints: 0,
        totalGames: 0,
        totalVictories: 0,
        totalDraws: 0,
        totalLosses: 0,
        goalsFavor: 0,
        goalsOwn: 0,
        goalsBalance: 0,
        efficiency: 0,
      };
      board.push(team);
    });
    return board;
  }

  static sorted(board: ILeaderboard[]) {
    board.sort((teamA, teamB) => {
      if (teamA.totalPoints > teamB.totalPoints) return -1;
      if (teamA.totalPoints < teamB.totalPoints) return 1;
      if (teamA.totalVictories > teamB.totalVictories) return -1;
      if (teamA.totalVictories < teamB.totalVictories) return 1;
      if (teamA.goalsBalance > teamB.goalsBalance) return -1;
      if (teamA.goalsBalance < teamB.goalsBalance) return 1;
      if (teamA.goalsFavor > teamB.goalsFavor) return -1;
      if (teamA.goalsFavor < teamB.goalsFavor) return 1;
      if (teamA.goalsOwn > teamB.goalsOwn) return -1;
      if (teamA.goalsOwn < teamB.goalsOwn) return 1;
      return 0;
    });
    return board;
  }

  static gamePoints(reaultA: number, resultB: number) {
    if (reaultA > resultB) return 3;
    if (reaultA < resultB) return 0;
    return 1;
  }

  static points(match: IMatch, type: string) {
    if (type === 'home') return Board.gamePoints(match.homeTeamGoals, match.awayTeamGoals);
    return Board.gamePoints(match.awayTeamGoals, match.homeTeamGoals);
  }

  static victories(match: IMatch, type: string) {
    const points = Board.points(match, type);
    if (points === 3) return 1;
    return 0;
  }

  static draws(match: IMatch, type: string) {
    const points = Board.points(match, type);
    if (points === 1) return 1;
    return 0;
  }

  static losses(match: IMatch, type: string) {
    const points = Board.points(match, type);
    if (points === 0) return 1;
    return 0;
  }

  static goalsFavor(match: IMatch, type: string) {
    if (type === 'home') return match.homeTeamGoals;
    return match.awayTeamGoals;
  }

  static goalsOwn(match: IMatch, type: string) {
    if (type === 'home') return match.awayTeamGoals;
    return match.homeTeamGoals;
  }

  static goalsBalance(match: IMatch, type: string) {
    if (type === 'home') return match.homeTeamGoals - match.awayTeamGoals;
    return match.awayTeamGoals - match.homeTeamGoals;
  }

  static efficiency(points: number, games: number) {
    return +((points / (games * 3)) * 100).toFixed(2);
  }

  static make(match: IMatch, board: ILeaderboard, type: string) {
    const matchBoard = board;
    matchBoard.totalPoints += this.points(match, type);
    matchBoard.totalGames += 1;
    matchBoard.totalVictories += this.victories(match, type);
    matchBoard.totalDraws += this.draws(match, type);
    matchBoard.totalLosses += this.losses(match, type);
    matchBoard.goalsFavor += this.goalsFavor(match, type);
    matchBoard.goalsOwn += this.goalsOwn(match, type);
    matchBoard.goalsBalance += this.goalsBalance(match, type);
    matchBoard.efficiency = this.efficiency(matchBoard.totalPoints, matchBoard.totalGames);
    return matchBoard;
  }
}
