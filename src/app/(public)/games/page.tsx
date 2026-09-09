import React, {FC} from 'react';
import {getGames} from "@/src/app/services/gameService";
import GameList from "@/src/app/components/GameComponents/GameListComponents/GameList/GameList";
import Pagination from "@/src/app/components/PaginationComponents/Pagination";

type PropsType = {
    searchParams: Promise<{[key:string]:string | string[] | undefined}>
}

const GamePage:FC<PropsType> = async({searchParams}) => {

    const params = await searchParams
    const page = Number(params.page || 1)

    const games = await getGames(page)
    return (
        <div>

            <Pagination meta={games} basePath={'/games'}/>
            <GameList data={games.results}/>

        </div>
    );
};

export default GamePage;