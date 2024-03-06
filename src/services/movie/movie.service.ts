import { KeyConstant } from "../../constants/key.constant"
import { RnUtils } from "../../utils/rn.util"
import { ApiService } from "../api.service"
import { ICreateComment, ILatestMovieResponse, IPopularMovieResponse, MovieDetails } from "./movie.dto"

export const MovieService = {
    getLatest: async () => {
        const result = await ApiService.get<ILatestMovieResponse>(`/movie/now_playing?language=en-US&page=1`)
        return result.data
    },
    getPopular: async () => {
        const result = await ApiService.get<IPopularMovieResponse>(`/movie/popular?language=en-US&page=2`)
        return result.data
    },
    getSingle: async (id: number) => {
        const result = await ApiService.get<MovieDetails>(`/movie/${id}?language=en-US`)
        return result.data
    },
    addComment: async (comment: ICreateComment) => {
        let allComments: ICreateComment[] = []
        const oldComments = await RnUtils.getData<ICreateComment[]>(KeyConstant.COMMENTS)
        if (oldComments) {
            allComments = [comment, ...oldComments]
        } else {
            allComments = [comment]
        }
        await RnUtils.setData(KeyConstant.COMMENTS, allComments)
    },
    getComment: async (movieId: number) => {
        let allComments: ICreateComment[] = []
        const oldComments = await RnUtils.getData<ICreateComment[]>(KeyConstant.COMMENTS)
        if (oldComments) {
            allComments = [...oldComments]
        }
        const list = allComments.filter(it => it.movieId === movieId)
        return list
    },
}
