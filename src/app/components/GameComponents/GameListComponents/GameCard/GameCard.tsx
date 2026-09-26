import React, {FC} from 'react';
import {ICardGame} from "@/src/app/modules/gameModules/GameListModules/ICardGame";
import Link from "next/link";
import StarsComponent from "@/src/app/components/StarsComponents/StarComponent";
import './gameCard.css'
import BadgeComponent from "@/src/app/components/BadgeComponents/BadgeComponent";

type PropsType = {
    game:ICardGame
}
const GameCard:FC<PropsType> = ({game}) => {

    const platform = (game.platforms ?? []).map(platform => {
        return platform.platform.name
    })


    return (
        <div className="game-card">
                <Link href={`/games/${game.id}`} className="game-card-link">
                    {game.background_image?
                        (<img src={game.background_image} alt={game.name} className='image-card'/>) :
                        (<div className='none-photo'>
                            🎮
                            <span>No cover available</span>
                        </div>)
                    }
                    <h1 className='card-title'>{game.name}</h1>
                    <p className='card-paragraph'>Platform: {platform.join(' • ')}</p>
                    <StarsComponent rating={game.rating} />

                </Link>


            <div className="card-genres">
                {game.genres.map((genre) => (
                    <BadgeComponent name={genre.name} link={`/genres/${genre.slug}`} key={genre.id} />
                ))}
            </div>

        </div>
    );
};

export default GameCard;