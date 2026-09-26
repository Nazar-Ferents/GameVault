


export const endpoints = {

    games:{
        allGames: (page:number)=>{
            return `games?page=${page}&page_size=12`
        },
        gameByID: (gameID:number)=>{
            return `games/${gameID}`
        },
        gamesByGenre: (page:number,genreSlug:string)=>{
            return `games?page=${page}&page_size=12&genres=${genreSlug}`
        }
    },
    genres:{
        allGenres: ()=>{
            return`genres`
        }
    },
    search:{
        gamesBySearch: (page:number,title:string)=>{
            return `games?page=${page}&page_size=12&search=${title}&ordering=-rating&search_precise=true&search_exact=true`
        }
    }


}