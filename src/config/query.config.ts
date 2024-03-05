import { QueryClient } from "@tanstack/react-query"

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnReconnect: false, // true
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            retry: 2,
        },
    },
})

export const QUERY_KEYS = {
    LATEST_MOVIE: "qk-latest-movie",
    POPULAR_MOVIE: "qk-popular-movie",
    SINGLE_MOVIE: "qk-single-movie-",
}
