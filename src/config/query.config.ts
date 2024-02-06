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
    // logger: {
    //     log: () => {
    //         // Log debugging information
    //     },
    //     warn: () => {
    //         // Log warning
    //     },
    //     error: () => {
    //         // console.info("some error in react query")
    //         // Log error
    //     },
    // },
})

export const QUERY_KEYS = {
    ALL_PRODUCTS: "qk-all-products",
}
