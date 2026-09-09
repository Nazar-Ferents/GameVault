import {IPlatform} from "@/src/app/modules/gameModules/GameListModules/IPlatform";
import {IGameGenre} from "@/src/app/modules/gameModules/GameListModules/IGameGenre";

export interface ICardGame {
  id: number;
  slug: string;
  name: string;
  released: string | null;
  background_image: string;
  rating: number;
  metacritic: number | null;
  playtime: number;
  platforms: IPlatform[];
  genres: IGameGenre[];
}