import React, {FC} from 'react';
import {IGenreCard} from "@/src/app/modules/genreModules/GenreListModules/IGenresList";
import Link from "next/link";
import './genresList.css'

type PropsType = {
    genre:IGenreCard
}
const GenreCard:FC<PropsType> = ({genre}) => {
    return (
        <div className="genre-card">
            <Link href={`/genres/${genre.slug}`}>{genre.name}</Link>

        </div>
    );
};

export default GenreCard;