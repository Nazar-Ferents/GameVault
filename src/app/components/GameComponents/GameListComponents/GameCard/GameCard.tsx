import React, {FC} from 'react';
import {ICardGame} from "@/src/app/modules/gameModules/GameListModules/ICardGame";
import Link from "next/link";

type PropsType = {
    game:ICardGame
}
const GameCard:FC<PropsType> = ({game}) => {

    const platform = game.platforms.map(platform => {
        return platform.platform.name
    })

    return (
        <div>
            <Link href={`/games/${game.id}`}>
            <img src={game.background_image} alt={game.name}/>
            <h1>{game.name}</h1>
            <p>Platform: {platform.join(' • ')}</p>
            <p>Rating: {game.rating}</p>
            </Link>
        </div>
    );
};

export default GameCard;