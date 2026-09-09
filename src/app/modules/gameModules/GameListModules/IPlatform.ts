
export interface IPlatform {
  platform: Platform;
  released_at: string;
  requirements_en: IRequirement | null;
  requirements_ru: IRequirement | null;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
  image: string | null;
  year_end: number | null;
  year_start: number | null;
  games_count: number;
  image_background: string;
}



export interface IRequirement {

    "minimum": string,
    "recommended": string

}