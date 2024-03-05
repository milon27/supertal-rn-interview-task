import { useQuery } from "@tanstack/react-query"
import { QUERY_KEYS } from "../../../config/query.config"
import { MovieService } from "../../../services/movie/movie.service"

export const useHomeController = () => {
    // latest
    const {
        data: latest,
        isLoading: latestLoading,
        error: latestError,
    } = useQuery({
        queryKey: [QUERY_KEYS.LATEST_MOVIE],
        queryFn: () => {
            return MovieService.getLatest()
        },
    })

    // popular
    const {
        data: popular,
        isLoading: popularLoading,
        error: popularError,
    } = useQuery({
        queryKey: [QUERY_KEYS.POPULAR_MOVIE],
        queryFn: () => {
            return MovieService.getPopular()
        },
    })

    return {
        latest: latest?.results || [],
        latestLoading,
        latestError,
        popular: popular?.results || [],
        popularLoading,
        popularError,
    }
}
