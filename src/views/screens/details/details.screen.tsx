import React from "react"
import { Image, ScrollView, Text, View } from "react-native"
import { useFavStore } from "../../../hooks/fav.store"
import { RnUtils } from "../../../utils/rn.util"
import MyButton from "../../components/common/my-button"
import MyLoading from "../../components/common/my-loading"
import MySpacer from "../../components/common/my-spacer"
import { useDetailsController } from "./details.controller"

export default function DetailsScreen() {
    const { product, error, isLoading } = useDetailsController()
    const addProduct = useFavStore(s => s.addProduct)

    if (isLoading) {
        return (
            <View className="flex-1 justify-center items-center">
                <MyLoading />
            </View>
        )
    }
    if (!product || error) {
        return (
            <View className="flex-1 justify-center items-center">
                <Text className="text-red-600 text-center text-xl">Not Found</Text>
            </View>
        )
    }

    return (
        <ScrollView className="flex-1 bg-gray-50">
            <View className="rounded-md  p-3 flex flex-col justify-center items-center">
                <Image
                    className="w-[90%] h-[450px] rounded-lg"
                    source={{
                        uri: product.image,
                    }}
                />
                <MySpacer />
                <Text className="text-primary font-semibold text-xl text-center">{product.title}</Text>
                <MySpacer />
                <Text className="text-center text-lg">Category: {product.category}</Text>
                <MySpacer />
                <Text className="text-center text-lg font-bold">Price: {product.price} $</Text>
                <MySpacer />
                <Text className="text-center text-lg">{product.description}</Text>
                <MySpacer />
                <MyButton
                    title="Add To Favorite"
                    onPress={() => {
                        addProduct(product)
                        RnUtils.toast("Added To Fav List")
                    }}
                />
                <MySpacer />
            </View>
        </ScrollView>
    )
}
