import { EConferences, ETeamLeagueNames, ITeam } from "./team";

interface IStanding {
  league: ETeamLeagueNames;
  season: number;
  team: Pick<ITeam, "id" | "name" | "nickname" | "code" | "logo">;
  conference: {
    name: EConferences;
    rank: number;
    win: number;
    loss: number;
  };
  division: {
    name: string;
    rank: number;
    win: number;
    loss: number;
    gamesBehind: string;
  };
  win: {
    home: number;
    away: number;
    total: number;
    percentage: string;
    lastTen: number;
  };
  loss: {
    home: number;
    away: number;
    total: number;
    percentage: string;
    lastTen: number;
  };
  gamesBehind: string;
  streak: number;
  winStreak: boolean;
  tieBreakerPoints: number | null;
}

export type { IStanding };
