export const matchsMock = [
  {
    id: 1,
    homeTeam: 16,
    homeTeamGoals: 1,
    awayTeam: 8,
    awayTeamGoals: 1,
    inProgress: 0,
    homeClub: 'São Paulo',
    awayClub: 'Santos',
  },
  {
    id: 2,
    homeTeam: 9,
    homeTeamGoals: 1,
    awayTeam: 14,
    awayTeamGoals: 1,
    inProgress: 0,
    homeClub: 'Corinthians',
    awayClub: 'Palmeiras',
  }
];

export const matchsInProgressMock = [
  {
    id: 1,
    homeTeam: 16,
    homeTeamGoals: 1,
    awayTeam: 8,
    awayTeamGoals: 1,
    inProgress: true,
    homeClub: 'São Paulo',
    awayClub: 'Santos',
  },
  {
    id: 2,
    homeTeam: 9,
    homeTeamGoals: 1,
    awayTeam: 14,
    awayTeamGoals: 1,
    inProgress: true,
    homeClub: 'Corinthians',
    awayClub: 'Palmeiras',
  }
];

export const matchMock = {
  id: 1,
  homeTeam: 16,
  homeTeamGoals: 1,
  awayTeam: 8,
  awayTeamGoals: 3,
  inProgress: true,
};

export const payloadMatchMock = {
  homeTeam: 16,
  homeTeamGoals: 2,
  awayTeam: 8,
  awayTeamGoals: 1,
  inProgress: false,
};

export const scoreboardMock = {
  homeTeamGoals: 2,
  awayTeamGoals: 1,
};
