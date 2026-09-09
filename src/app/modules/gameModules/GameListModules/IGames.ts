import {ICardGame} from "@/src/app/modules/gameModules/GameListModules/ICardGame";

export interface IGames {
  count: number;
  next: string | null;
  previous: string | null;
  results:ICardGame[];
}