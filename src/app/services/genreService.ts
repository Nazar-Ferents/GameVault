import {IGenresList} from "@/src/app/modules/genreModules/GenreListModules/IGenresList";
import {rawgFetch} from "@/lib/rawgFetch";
import {endpoints} from "@/src/app/constants/endpoints";


export const getGenres = async ():Promise<IGenresList>=>{

    const response = await rawgFetch(endpoints.genres.allGenres());
    return await response.json();
}
