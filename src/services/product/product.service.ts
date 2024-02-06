import { ApiService } from "../api.service"
import { IProduct } from "./product.dto"

export const ProductService = {
    getAllProduct: async () => {
        const result = await ApiService.get<IProduct[]>(`/products?limit=20`)
        return result.data
    },
    getSingleProduct: async (id: number) => {
        const result = await ApiService.get<IProduct>(`/products/${id}`)
        return result.data
    },
}
