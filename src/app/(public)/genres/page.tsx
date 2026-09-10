
import {getGenres} from "@/src/app/services/genreService";
import GenreList from "@/src/app/components/GenreComponents/GenreListComponents/GenreList/GenreList";


const GenresPage= async () => {


    const genres = await getGenres()
    return (
        <div>

            <GenreList data={genres.results}/>

        </div>
    );
};

export default GenresPage;