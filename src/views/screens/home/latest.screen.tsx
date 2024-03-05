import { useNavigation } from "@react-navigation/native"
import React from "react"
import { FlatList, Text, View } from "react-native"
import MyLoading from "../../components/common/my-loading"
import { TypeRootNavigationProp } from "../../components/navigator/root.navigator"
import { SingleMovieMemo } from "./components/single-movie"
import { useHomeController } from "./home.controller"

export default function LatestScreen() {
    const { latest, latestError, latestLoading } = useHomeController()
    const { navigate } = useNavigation<TypeRootNavigationProp>()

    if (latestLoading) {
        return (
            <View className="flex-1 justify-center items-center">
                <MyLoading />
            </View>
        )
    }
    if (latestError) {
        return (
            <View className="flex-1 justify-center items-center">
                <Text className="text-red-600 text-center text-xl">No Movie Found</Text>
            </View>
        )
    }

    return (
        <>
            <FlatList
                data={latest}
                keyExtractor={it => it.id.toString()}
                numColumns={2}
                renderItem={({ item }) => {
                    return <SingleMovieMemo item={item} navigate={navigate} />
                }}
            />
        </>
    )
}
