interface Movie{
    id: number;
    title: string;
    release_date: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    vote_count: number;
    video: boolean;
    popularity: number;
    original_language: string;
    original_title: string;
    genre_ids: number[];
    adult: boolean;
    backdrop_path: string;
}