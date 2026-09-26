import React, {FC} from 'react';
import {IGameDetails} from "@/src/app/modules/gameModules/GameDetailsModules/IGameDetails";
import StarsComponent from "@/src/app/components/StarsComponents/StarComponent";
import BadgeComponent from "@/src/app/components/BadgeComponents/BadgeComponent";
import './gameDetails.css'

type PropsType = {
    gameDetails:IGameDetails,

}

const GameDetailsCard:FC<PropsType> = ({gameDetails}) => {
    const platform = gameDetails.platforms.map(platform => platform.platform.name);

    const developer = gameDetails.developers.map(developer => developer.name);
    const publisher = gameDetails.publishers.map(publisher => publisher.name);
    const tag = gameDetails.tags.map(tag => tag.name);


    return (
        <div className='game-details'>
            <div className="game-details-header">
                <img className='poster' src={gameDetails.background_image} alt={gameDetails.name}/>
                <div className='game-details-main'>
                    <h1>{gameDetails.name}</h1>
                    <p>Release date: {gameDetails.released}</p>
                    <StarsComponent rating={gameDetails.rating} />
                    {gameDetails.metacritic && <p>Metacritic: {gameDetails.metacritic}</p>}
                    {gameDetails.esrb_rating && <p>ESRB: {gameDetails.esrb_rating.name}</p>}
                </div>

            </div>
            <div className="game-details-info">
                <p className="game-description">
                    {gameDetails.description_raw}
                </p>

                <p className="game-platforms">Platforms: {platform.join(' • ')}</p>

            </div>
            <div className="game-details-genres">
                <p>Genres: </p>
                <div className="game-details-badges">
                    {gameDetails.genres.map(genre => (
                        <BadgeComponent key={genre.id} link={`/genres/${genre.slug}`} name={genre.name} />
                    ))}
                </div>

            </div>
            <div className="game-details-meta">
                <p>Developers: {developer.join(' • ')}</p>
                <p>Publisher: {publisher.join(' • ')}</p>
            </div>
            <div className="game-details-extra">
                <p>PlayTime: {gameDetails.playtime} hours</p>
                {gameDetails.website && <a href={gameDetails.website}>Official Website</a>}

            </div>
            <div className="game-details-tags">
                <p>Tags: {tag.join(' • ')}</p>
            </div>

        </div>

    );
};

export default GameDetailsCard;