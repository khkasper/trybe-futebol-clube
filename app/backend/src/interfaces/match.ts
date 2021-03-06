export interface IMatch {
  id?: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress: boolean;
  homeClub?: {
    clubName: string;
  };
  awayClub?: {
    awayClub: string;
  };
}

export interface IMatchPayload {
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress: boolean;
}

export interface IScorePayload {
  homeTeamGoals: number;
  awayTeamGoals: number;
}
