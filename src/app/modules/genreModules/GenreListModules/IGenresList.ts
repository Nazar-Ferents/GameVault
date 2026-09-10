export interface IGenresList {
    count: number;
    next: string;
    previous: string;
    results: IGenreCard[];
}

export interface IGenreCard {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
    games: Games[];
}

export interface Games {
  id: number;
  slug: string;
  name: string;
  added: number;
}



