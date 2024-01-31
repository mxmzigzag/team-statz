import type { IPlayerStatistic } from "./player";

interface IQuarter {
  id: string;
  enemy: number;
  our: number;
}

interface IGame {
  id: string;
  ourScore: number;
  enemyScore: number;
  pending: boolean;
  date: string;
  enemy: string;
  time: string;
  quarters: IQuarter[];
  playersStats: IPlayerStatistic[];
}

export type { IGame, IQuarter };
