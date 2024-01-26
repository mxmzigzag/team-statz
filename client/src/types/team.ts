enum ETeamLeagueNames {
  standard = "standard",
  vegas = "vegas",
  utah = "utah",
  sacramento = "sacramento",
}

enum EConferences {
  east = "aast",
  west = "west",
}

type TTeamLeagueInfo = {
  conference: EConferences;
  division: string;
};

type TTeamLeague = Record<ETeamLeagueNames, TTeamLeagueInfo>;

interface ITeam {
  id: number;
  name: string;
  nickname: string;
  code: string;
  city: string;
  logo: string;
  allStar: boolean;
  nbaFranchise: boolean;
  leagues: TTeamLeague;
}

export type { ITeam };
export { EConferences, ETeamLeagueNames };
