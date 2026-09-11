import React, {FC} from 'react';
import {ICardGame} from "@/src/app/modules/gameModules/GameListModules/ICardGame";
import Link from "next/link";
import StarsComponent from "@/src/app/components/StarsComponents/StarComponent";

type PropsType = {
    game:ICardGame
}
const GameCard:FC<PropsType> = ({game}) => {

    const platform = (game.platforms ?? []).map(platform => {
        return platform.platform.name
    })

    const genre = (game.genres ?? []).map(genre => {
        return genre.name
    })

    return (
        <div>
            <Link href={`/games/${game.id}`}>
                {game.background_image?
                    (<img src={game.background_image} alt={game.name}/>) :
                    (<div>Poster to game is missing</div>)
                }
            <h1>{game.name}</h1>
            <p>Platform: {platform.join(' • ')}</p>
            <StarsComponent rating={game.rating} />
            <p>Genres: {genre.join(' • ')}</p>
            </Link>
        </div>
    );
};

export default GameCard;