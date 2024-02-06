import { useRoute } from "@react-navigation/native"
import { useQuery } from "@tanstack/react-query"
import { QUERY_KEYS } from "../../../config/query.config"
import { ProductService } from "../../../services/product/product.service"
import { TypeHomeRouteProp } from "../../components/navigator/home.navigator"

export const useProductDetailsController = () => {
    const { params } = useRoute<TypeHomeRouteProp>()

    const { data, isLoading, error } = useQuery({
        queryKey: [QUERY_KEYS.ALL_PRODUCTS, params?.id],
        queryFn: () => {
            if (!params?.id) {
                throw new Error("Product Not Found")
            }
            return ProductService.getSingleProduct(params?.id)
        },
    })

    return {
        product: data,
        isLoading,
        error,
    }
}
