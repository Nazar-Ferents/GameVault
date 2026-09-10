import React, {FC} from 'react';
import {Metadata} from "next";
import {getGameByID} from "@/src/app/services/gameService";
import GameDetailsCard from "@/src/app/components/GameComponents/GameDetailsComponants/GameDetailsCard";
import {getGenres} from "@/src/app/services/genreService";

type PropsType = {
    params: Promise<{[key:string]:string | string[] | undefined}>,

}

export const  generateMetadata = async({params}:PropsType):Promise<Metadata> => {
    const gameID = Number((await params).gameID);

    if (Number.isNaN(gameID)) {
        throw new Error("Invalid game ID");
    }

    const game = await getGameByID(gameID);
    return {
        title:`${game.name}`
    }
}

const GameDetailsPage:FC<PropsType> =async ({params}) => {

    const gameID = Number((await params).gameID);

    if (Number.isNaN(gameID)) {
        throw new Error("Invalid game ID");
    }

    const game = await getGameByID(gameID);




    return (
        <div>
            <GameDetailsCard gameDetails={game}  />
        </div>
    );
};

export default GameDetailsPage;