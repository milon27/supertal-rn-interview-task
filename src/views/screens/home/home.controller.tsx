import { useQuery } from "@tanstack/react-query"
import { QUERY_KEYS } from "../../../config/query.config"
import { ProductService } from "../../../services/product/product.service"

export const useHomeController = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: [QUERY_KEYS.ALL_PRODUCTS],
        queryFn: () => {
            return ProductService.getAllProduct()
        },
    })

    return {
        products: data,
        isLoading,
        error,
    }
}
