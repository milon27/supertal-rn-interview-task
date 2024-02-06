import AsyncStorage from "@react-native-async-storage/async-storage"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import { IProduct } from "../services/product/product.dto"

interface IFavStore {
    list: IProduct[]
    // * actions
    addProduct: (product: IProduct) => void
    removeProduct: (id: number) => void
}

export const useFavStore = create<IFavStore>()(
    persist(
        set => {
            return {
                list: [],
                // * actions
                addProduct: (product: IProduct) => {
                    set(old => {
                        // check already there or not
                        if (old.list.includes(product)) {
                            return { ...old }
                        }
                        const list = [product, ...old.list]
                        return { ...old, list }
                    })
                },
                removeProduct: (id: number) => {
                    set(old => {
                        const list = [...old.list]
                        const newList = list.filter(item => item.id !== id)
                        return { ...old, list: newList }
                    })
                },
            }
        },
        {
            name: "fav-list",
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
)
