import { useRoute } from "@react-navigation/native"
import { useQuery } from "@tanstack/react-query"
import { QUERY_KEYS } from "../../../config/query.config"
import { MovieService } from "../../../services/movie/movie.service"
import { TypeRootRouteProp } from "../../components/navigator/root.navigator"

export const useDetailsController = () => {
    const { params } = useRoute<TypeRootRouteProp>()

    const { data, isLoading, error } = useQuery({
        queryKey: [QUERY_KEYS.LATEST_MOVIE, params?.id],
        queryFn: () => {
            if (!params?.id) {
                throw new Error("Not Found")
            }
            return MovieService.getSingle(params?.id)
        },
    })

    return {
        movie: data,
        isLoading,
        error,
    }
}
