import { ApiService } from "../api.service"
import { ILatestMovieResponse, IPopularMovieResponse, MovieDetails } from "./movie.dto"

export const MovieService = {
    getLatest: async () => {
        const result = await ApiService.get<ILatestMovieResponse>(`/movie/now_playing?language=en-US&page=1`)
        return result.data
    },
    getPopular: async () => {
        const result = await ApiService.get<IPopularMovieResponse>(`/movie/popular?language=en-US&page=2`)
        return result.data
    },
    getSingleProduct: async (id: number) => {
        const result = await ApiService.get<MovieDetails>(`/movie/${id}?language=en-US`)
        return result.data
    },
}
