import { useNavigation } from "@react-navigation/native"
import React from "react"
import { FlatList, Text, View } from "react-native"
import MyLoading from "../../components/common/my-loading"
import { TypeRootNavigationProp } from "../../components/navigator/root.navigator"
import SingleMovie from "./components/single-movie"
import { useHomeController } from "./home.controller"

export default function PopularScreen() {
    const { popular, popularError, popularLoading } = useHomeController()
    const { navigate } = useNavigation<TypeRootNavigationProp>()

    if (popularLoading) {
        return (
            <View className="flex-1 justify-center items-center">
                <MyLoading />
            </View>
        )
    }
    if (popularError) {
        return (
            <View className="flex-1 justify-center items-center">
                <Text className="text-red-600 text-center text-xl">No Movie Found</Text>
            </View>
        )
    }

    return (
        <>
            <FlatList
                data={popular}
                keyExtractor={it => it.id.toString()}
                numColumns={2}
                renderItem={({ item }) => SingleMovie({ item, navigate })}
            />
        </>
    )
}
