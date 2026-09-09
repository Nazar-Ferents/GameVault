export interface Platform {
    id: number;
    name: string;
    slug: string;
    image?: string;
    year_end?: string;
    year_start: number;
    games_count: number;
    image_background: string;
}



export interface Platforms {
    platform: Platform;
    released_at: string;

}