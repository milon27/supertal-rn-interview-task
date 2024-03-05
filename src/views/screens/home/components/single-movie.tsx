import React from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { EnvConfig } from "../../../../config/env.config"
import { NavUrl } from "../../../../constants/nav-url.constant"
import { IMovie } from "../../../../services/movie/movie.dto"
import { DateUtil } from "../../../../utils/date.util"
import MySpacer from "../../../components/common/my-spacer"
import { TypeRootNavigationProp } from "../../../components/navigator/root.navigator"

export default function SingleMovie({
    item,
    navigate,
}: {
    item: IMovie
    navigate: TypeRootNavigationProp["navigate"]
}) {
    return (
        <TouchableOpacity
            className="w-1/2 p-2"
            onPress={() => {
                navigate(NavUrl.DETAILS, {
                    id: item.id,
                })
            }}>
            <View className="relative">
                <Image
                    className="w-full h-72 rounded-lg"
                    source={{
                        uri: EnvConfig.IMAGE_PREFIX + item.poster_path,
                    }}
                />
                <View className="absolute left-3 -bottom-5 rounded-full flex justify-center items-center bg-secondary">
                    <View className="p-2 w-10 h-10 rounded-full flex justify-center items-center bg-primary m-0.5">
                        <Text className="text-white font-bold">{item.vote_average.toFixed(1)}</Text>
                    </View>
                </View>
            </View>
            <MySpacer />
            <View className="pl-2 pt-2">
                <Text className="text-primary font-semibold text-lg">{item.title}</Text>
                <Text className="text-gray-400 text-sm font-light">{DateUtil.format(item.release_date)}</Text>
            </View>
        </TouchableOpacity>
    )
}
