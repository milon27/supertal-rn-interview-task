// * Request Object

export interface ICreateComment {
    id: string
    movieId: number
    text: string
    userId: string
    createdAt: string
}

// * Response
export interface IMovie {
    id: number
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export interface ILatestMovieResponse {
    dates: {
        maximum: string
        minimum: string
    }
    page: number
    results: IMovie[]
    total_pages: number
    total_results: number
}

export interface IPopularMovieResponse {
    page: number
    results: IMovie[]
    total_pages: number
    total_results: number
}

// movie details
interface Genre {
    id: number
    name: string
}

interface ProductionCompany {
    id: number
    logo_path: string | null
    name: string
    origin_country: string
}

interface ProductionCountry {
    iso_3166_1: string
    name: string
}

interface SpokenLanguage {
    english_name: string
    iso_639_1: string
    name: string
}

export interface MovieDetails {
    adult: boolean
    backdrop_path: string
    belongs_to_collection: any // You can create a specific interface if this can have a defined structure
    budget: number
    genres: Genre[]
    homepage: string
    id: number
    imdb_id: string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: ProductionCompany[]
    production_countries: ProductionCountry[]
    release_date: string
    revenue: number
    runtime: number
    spoken_languages: SpokenLanguage[]
    status: string
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}
