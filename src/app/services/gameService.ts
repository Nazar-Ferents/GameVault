import {IGames} from "@/src/app/modules/gameModules/IGame";
import {rawgFetch} from "@/lib/rawgFetch";
import {endpoints} from "@/src/app/constants/endpoints";


export const getGames = async(page:number):Promise<IGames> => {

    const response = await rawgFetch(endpoints.games.allGames(page))
    return await response.json();
}