import React, {FC} from 'react';
import {ICardGame} from "@/src/app/modules/gameModules/ICardGame";

type PropsType = {
    game:ICardGame
}
const GameCard:FC<PropsType> = ({game}) => {

    const platform = game.platforms.map(platform => {
        return platform.platform.name
    })

    return (
        <div>
            <img src={game.background_image} alt={game.name}/>
            <h1>{game.name}</h1>
            <p>Platform: {platform.join(' • ')}</p>
            <p>Rating: {game.rating}</p>
        </div>
    );
};

export default GameCard;