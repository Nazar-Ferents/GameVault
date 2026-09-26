import React, {FC} from 'react';
import {ICardGame} from "@/src/app/modules/gameModules/GameListModules/ICardGame";
import GameCard from "@/src/app/components/GameComponents/GameListComponents/GameCard/GameCard";

type PropsType = {
    data:ICardGame[];
}



const GamesByGenreList:FC<PropsType> = ({data}) => {
    return (
        <div className='games-grid'>
            {
            data.map((game) => (<GameCard game={game} key={game.id}/>))
        }

        </div>
    );
};

export default GamesByGenreList;