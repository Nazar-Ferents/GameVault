import React, {FC} from 'react';
import GamesByGenreList from "@/src/app/components/GameComponents/GameListComponents/GameByGenresList/GamesByGenreList";
import {getGameByGenre} from "@/src/app/services/gameService";
import Pagination from "@/src/app/components/PaginationComponents/Pagination";
import {Metadata} from "next";

type PropsType = {
    params: Promise<{[key:string]:string | string[] | undefined}>,
    searchParams: Promise<{[key:string]:string | string[] | undefined}>
}

export const  generateMetadata = async({params}:PropsType):Promise<Metadata> => {
    const paramsSlug = await params
    const genreSlug = paramsSlug?.genreSlug?.toString() || ''

    const formatGenreTitle  = (genreSlug:string) => {
        const formattedTitle = genreSlug.replace(/-/g,' ')
        const finalTitle = formattedTitle.charAt(0).toUpperCase() + formattedTitle.slice(1);

        return finalTitle;
    }


    return {
        title:`${formatGenreTitle(genreSlug)}`
    }
}

const GamesByGenresPage:FC<PropsType> = async({params,searchParams}) => {

    const paramsSlug = await params
    const genreSlug = paramsSlug?.genreSlug?.toString() || ''



    const paramsPage = await searchParams
    const page = Number(paramsPage.page || 1)

    const gamesByGenre = await getGameByGenre(page,genreSlug)



    return (
        <div>
            <Pagination meta={gamesByGenre} basePath={`${genreSlug}`}/>
            <GamesByGenreList data={gamesByGenre.results}/>
        </div>
    );
};

export default GamesByGenresPage;