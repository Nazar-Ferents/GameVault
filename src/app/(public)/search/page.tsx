import React, {FC} from 'react';
import {getGameBySearch} from "@/src/app/services/gameService";
import Pagination from "@/src/app/components/PaginationComponents/Pagination";
import GameList from "@/src/app/components/GameComponents/GameListComponents/GameList/GameList";

type PropsType = {
    searchParams: Promise<{[key:string]:string | string[] | undefined}>
}

const SearchPage:FC<PropsType> = async ({searchParams}) => {

    const params = await searchParams
    const title = params.title?.toString() || '';
    const page = Number(params.page || 1);

    const games = await getGameBySearch(page,title)
    if(games.results.length === 0) {
        return <div>No Games Found</div>
    }
    return (
        <div>
            <Pagination meta={games} basePath={'/search'} />
            <GameList data={games.results}/>

        </div>
    );
};

export default SearchPage;