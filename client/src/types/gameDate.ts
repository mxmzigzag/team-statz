interface IGameDate {
  id: string;
  date: string;
  enemy: string;
  time: string;

  enemyScore?: number;
  ourScore?: number;
}

export type { IGameDate };
