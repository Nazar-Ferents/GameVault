import React, {FC} from 'react';
import {IGenreCard} from "@/src/app/modules/genreModules/GenreListModules/IGenresList";
import Link from "next/link";

type PropsType = {
    genre:IGenreCard
}
const GenreCard:FC<PropsType> = ({genre}) => {
    return (
        <div>
            <Link href={`/genres/${genre.id}`}>{genre.name}</Link>

        </div>
    );
};

export default GenreCard;