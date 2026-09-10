


export const endpoints = {

    games:{
        allGames: (page:number)=>{
            return `games?page=${page}&page_size=10`
        },
        gameByID: (gameID:number)=>{
            return `games/${gameID}`
        }
    },
    genres:{
        allGenres: ()=>{
            return`genres`
        },
        genreByID: (page:number,genreID:number)=>{
            return `games?page=${page}&page_size=10&genres=${genreID}`
        }
    }


}