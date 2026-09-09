export interface MetacriticPlatform {
    platform: number;
    name: string;
    slug: string;
}

export interface Metacritic_platforms {
    metascore: number;
    url: string;
    platform: MetacriticPlatform;
}