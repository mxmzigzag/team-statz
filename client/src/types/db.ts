import { IGame } from "./game";
import { IPlayer } from "./player";
import { ISettings } from "./settings";

interface IDatabase {
  players: IPlayer[];
  games: IGame[];
  settings: ISettings[];
}

export type { IDatabase };
