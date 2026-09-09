import React, {FC} from 'react';
import {IGameDetails} from "@/src/app/modules/gameModules/GameDetailsModules/IGameDetails";

type PropsType = {
    gameDetails:IGameDetails
}

const GameDetailsCard:FC<PropsType> = ({gameDetails}) => {
    return (
        <div>
            <img src={gameDetails.background_image} alt={gameDetails.name}/>
           <h1>{gameDetails.name}</h1>
        </div>
    );
};

export default GameDetailsCard;