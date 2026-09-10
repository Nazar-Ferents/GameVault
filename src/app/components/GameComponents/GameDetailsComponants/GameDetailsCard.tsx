import React, {FC} from 'react';
import {IGameDetails} from "@/src/app/modules/gameModules/GameDetailsModules/IGameDetails";
import Link from "next/link";

type PropsType = {
    gameDetails:IGameDetails,

}

const GameDetailsCard:FC<PropsType> = ({gameDetails}) => {
    const platform = gameDetails.platforms.map(platform => platform.platform.name);

    const developer = gameDetails.developers.map(developer => developer.name);
    const publisher = gameDetails.publishers.map(publisher => publisher.name);
    const tag = gameDetails.tags.map(tag => tag.name);

    return (
        <div>
            <div>
                <img src={gameDetails.background_image} alt={gameDetails.name}/>
                <h1>{gameDetails.name}</h1>
                <p>Release date: {gameDetails.released}</p>
                <p>Rating: {gameDetails.rating}</p>
                {gameDetails.metacritic && <p>Metacritic: {gameDetails.metacritic}</p>}
                {gameDetails.esrb_rating && <p>ESRB: {gameDetails.esrb_rating.name}</p>}
            </div>
            <div>
                {gameDetails.description_raw}
                <p>Platforms: {platform.join(' • ')}</p>
                <p>Genres: </p>

            </div>
            <div>
                <p>Developers: {developer.join(' • ')}</p>
                <p>Publisher: {publisher.join(' • ')}</p>
            </div>
            <div>
                <p>PlayTime: {gameDetails.playtime} hours</p>
                {gameDetails.website && <p>Official website: {gameDetails.website}</p>}

            </div>
            <div>
                <p>Tags: {tag.join(' • ')}</p>
            </div>

        </div>

    );
};

export default GameDetailsCard;