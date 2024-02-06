import React from "react"
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { useFavStore } from "../../../hooks/fav.store"
import { RnUtils } from "../../../utils/rn.util"
import MySpacer from "../../components/common/my-spacer"

export default function FavoritesScreen() {
    const products = useFavStore(s => s.list)
    const removeProduct = useFavStore(s => s.removeProduct)

    if (!products || (products && products.length === 0)) {
        return (
            <View className="flex-1 h-full justify-center items-center">
                <Text className="text-2xl text-red-600">♥</Text>
                <Text className="text-xl">No Favorites Product Added Yet</Text>
            </View>
        )
    }

    return (
        <ScrollView>
            <View className="p-4 flex-1">
                <Text className="text-2xl text-primary font-bold text-center">Favorites Product List</Text>
                <MySpacer />
                {/* product list */}
                <View className="flex flex-row flex-wrap">
                    {(products || []).map(item => {
                        return (
                            <TouchableOpacity key={item.id} className="w-1/2 p-2">
                                <View className="relative rounded-md bg-gray-200 p-3 flex flex-col justify-center items-center">
                                    <TouchableOpacity
                                        onPress={() => {
                                            removeProduct(item.id)
                                            RnUtils.toast("Removed From Fav List")
                                        }}
                                        className="bg-black absolute z-10 top-4 right-4 rounded-full p-2">
                                        <Text className="text-white">❌</Text>
                                    </TouchableOpacity>
                                    <Image
                                        className="w-36 h-48 rounded-lg"
                                        source={{
                                            uri: item.image,
                                        }}
                                    />
                                    <MySpacer />
                                    <Text className="text-primary font-semibold text-lg text-center">
                                        {item.title}
                                    </Text>
                                    <Text className="text-center">Price: {item.price} $</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </View>
        </ScrollView>
    )
}
