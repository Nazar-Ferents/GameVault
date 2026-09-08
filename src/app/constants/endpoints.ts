


export const endpoints = {

    games:{
        allGames: (page:number)=>{
            return `games?page=${page}&page_size=10`
        }
    }
}