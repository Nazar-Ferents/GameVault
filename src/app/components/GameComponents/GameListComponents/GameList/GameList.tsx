import React, {FC} from 'react';
import {ICardGame} from "@/src/app/modules/gameModules/ICardGame";
import GameCard from "@/src/app/components/GameComponents/GameListComponents/GameCard/GameCard";

type PropsType = {
    data:ICardGame[]
}
const GameList:FC<PropsType> =  ({data}) => {


    return (
        <div>
            {
                data.map((game) => (<GameCard key={game.id} game={game} />))
            }
        </div>
    );
};

export default GameList;