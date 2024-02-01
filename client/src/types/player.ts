interface ICoordinate {
  id: string;
  x: number;
  y: number;
  isMiss: boolean;
}

interface IPlayerStatistic {
  id: string;
  pts: number;
  oreb: number;
  dreb: number;
  ast: number;
  blk: number;
  stl: number;
  plus_minus: number;
  two_pa: number;
  two_pm: number;
  three_pa: number;
  three_pm: number;
  fta: number;
  ftm: number;
  tov: number;
  fouls: number;
  minutes: number;
  coordinates: ICoordinate[];
}

enum EPlayerPosition {
  "PG" = "PG",
  "SG" = "SG",
  "SF" = "SF",
  "PF" = "PF",
  "C" = "C",
}

interface IPlayer {
  id: string;
  name: string;
  position: EPlayerPosition;
  age: number;
  number: number;
  gp: number;
  gs: number;
  mp: number;
  pts: number;
  oreb: number;
  dreb: number;
  reb: number;
  ast: number;
  blk: number;
  stl: number;
  fta: number;
  ftm: number;
  two_pa: number;
  two_pm: number;
  three_pa: number;
  three_pm: number;
  tov: number;
  fouls: number;
  bestInAst: boolean;
  bestInBlk: boolean;
  bestInPts: boolean;
  bestInReb: boolean;
  bestInStl: boolean;
  image_thumb: string;
  birthDate: string;
  plus_minus: number;
}

export type { IPlayer, IPlayerStatistic, ICoordinate };
export { EPlayerPosition };
