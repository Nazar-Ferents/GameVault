import React, {FC} from 'react';
import {IGenreCard} from "@/src/app/modules/genreModules/GenreListModules/IGenresList";
import GenreCard from "@/src/app/components/GenreComponents/GenreListComponents/GenreCard/GenreCard";

type PropsType = {
    data:IGenreCard[]
}
const GenreList:FC<PropsType> = ({data}) => {


    return (
        <div className='genres-grid'>
            {
                data.map((genre) => <GenreCard key={genre.id} genre={genre}/>)
            }
        </div>
    );
};

export default GenreList;