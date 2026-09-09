import {IGames} from "@/src/app/modules/gameModules/GameListModules/IGames";
import {rawgFetch} from "@/lib/rawgFetch";
import {endpoints} from "@/src/app/constants/endpoints";
import {IGameDetails} from "@/src/app/modules/gameModules/GameDetailsModules/IGameDetails";


export const getGames = async(page:number):Promise<IGames> => {

    const response = await rawgFetch(endpoints.games.allGames(page))
    return await response.json();
}

export const getGameByID = async (gameID:number):Promise<IGameDetails> => {

    const response = await rawgFetch(endpoints.games.gameByID(gameID))
    return await response.json();
}