import { useNavigation } from "@react-navigation/native"
import React from "react"
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { NavUrl } from "../../../constants/nav-url.constant"
import MyLoading from "../../components/common/my-loading"
import MySpacer from "../../components/common/my-spacer"
import { TypeRootNavigationProp } from "../../components/navigator/root.navigator"
import { useHomeController } from "./home.controller"

export default function LatestScreen() {
    const { error, isLoading, products } = useHomeController()
    const { navigate } = useNavigation<TypeRootNavigationProp>()

    if (isLoading) {
        return (
            <View className="flex-1 justify-center items-center">
                <MyLoading />
            </View>
        )
    }
    if (error) {
        return (
            <View className="flex-1 justify-center items-center">
                <Text className="text-red-600 text-center text-xl">No Products Found</Text>
            </View>
        )
    }

    return (
        <ScrollView>
            <View className="flex-1 p-2">
                <MySpacer />
                {isLoading && <MyLoading />}
                {/* product grid */}
                <View className="flex flex-row flex-wrap">
                    {(products || []).map(item => {
                        return (
                            <TouchableOpacity
                                key={item.id}
                                className="w-1/2 p-2"
                                onPress={() => {
                                    navigate(NavUrl.DETAILS, {
                                        id: item.id,
                                    })
                                }}>
                                <View className="rounded-md bg-gray-200 p-3 flex flex-col justify-center items-center">
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

                <MySpacer />
            </View>
        </ScrollView>
    )
}
