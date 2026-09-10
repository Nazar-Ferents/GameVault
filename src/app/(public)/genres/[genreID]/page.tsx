import React, {FC} from 'react';
import GamesByGenreList from "@/src/app/components/GameComponents/GameListComponents/GameByGenresList/GamesByGenreList";
import {getGameByGenre} from "@/src/app/services/gameService";
import Pagination from "@/src/app/components/PaginationComponents/Pagination";

type PropsType = {
    params: Promise<{[key:string]:string | string[] | undefined}>,
    searchParams: Promise<{[key:string]:string | string[] | undefined}>
}

const GamesByGenresPage:FC<PropsType> = async({params,searchParams}) => {

    const genreID = Number((await params).genreID)

    if (Number.isNaN(genreID)) {
        throw new Error("Invalid genre ID")
    }

    const paramsPage = await searchParams
    const page = Number(paramsPage.page || 1)

    const gamesByGenre = await getGameByGenre(page,genreID)



    return (
        <div>
            <Pagination meta={gamesByGenre} basePath={`${genreID}`}/>
            <GamesByGenreList data={gamesByGenre.results}/>
        </div>
    );
};

export default GamesByGenresPage;