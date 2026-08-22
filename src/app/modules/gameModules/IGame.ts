import {ICardGame} from "@/src/app/modules/gameModules/ICardGame";

export interface IGame {
  count: number;
  next: string | null;
  previous: string | null;
  results:ICardGame[];
}