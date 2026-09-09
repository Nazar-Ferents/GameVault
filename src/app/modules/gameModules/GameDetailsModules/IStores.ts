export interface Store {
    id: number;
    name: string;
    slug: string;
    domain: string;
    games_count: number;
    image_background: string;
}

export interface Stores {
    id: number;
    url: string;
    store: Store;
}