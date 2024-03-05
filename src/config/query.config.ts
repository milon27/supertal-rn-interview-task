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
    ALL_PRODUCTS: "qk-all-products",
}
