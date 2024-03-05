import React from "react"
import { Image, ImageBackground, ScrollView, StatusBar, Text, View } from "react-native"
import { EnvConfig } from "../../../config/env.config"
import { DateUtil } from "../../../utils/date.util"
import { RnUtils } from "../../../utils/rn.util"
import MyButton from "../../components/common/my-button"
import MyLoading from "../../components/common/my-loading"
import MySpacer from "../../components/common/my-spacer"
import { useDetailsController } from "./details.controller"

export default function DetailsScreen() {
    const { movie: item, error, isLoading } = useDetailsController()

    if (isLoading) {
        return (
            <View className="flex-1 justify-center items-center">
                <MyLoading />
            </View>
        )
    }
    if (!item || error) {
        return (
            <View className="flex-1 justify-center items-center">
                <Text className="text-red-600 text-center text-xl">Not Found</Text>
            </View>
        )
    }

    return (
        <ScrollView className="flex-1 bg-gray-50">
            <StatusBar translucent backgroundColor="transparent" />
            {/* Set translucent and transparent backgroundColor */}
            <ImageBackground
                blurRadius={4}
                className="w-full"
                source={{
                    uri: EnvConfig.IMAGE_PREFIX + item.backdrop_path,
                }}>
                <View className="pt-8 pb-4 m-4 flex-row space-x-4">
                    <Image
                        className="w-36 min-h-[245px] rounded-md"
                        source={{
                            uri: EnvConfig.IMAGE_PREFIX + item.poster_path,
                        }}
                    />
                    <View className="flex-1">
                        <MySpacer />
                        <Text className="text-white font-bold text-xl">
                            {item.title}-{item.tagline} ({DateUtil.getYear(item.release_date)})
                        </Text>
                        <Text className="text-gray-200">
                            Genres:{" "}
                            {item.genres
                                .map(it => it.name)
                                .toString()
                                .replaceAll(",", ", ")}
                        </Text>
                        <Text className="text-lg font-semibold text-primary">
                            Rating: {item.vote_average.toFixed(2)}
                        </Text>
                        <Text className="text-gray-200">Runtime: {item.runtime}m</Text>
                    </View>
                </View>
            </ImageBackground>
            <View className="p-4 ">
                <View className="">
                    <Text className="text-sm">From </Text>
                    <Text className="font-semibold text-primary">
                        {item.production_companies
                            .map(it => it.name)
                            .toString()
                            .replaceAll(",", ", ")}
                    </Text>
                    <MySpacer />
                    <Text className="text-sm">Languages </Text>
                    <Text className="text-sm font-light">
                        {item.spoken_languages
                            .map(it => it.name)
                            .toString()
                            .replaceAll(",", ", ")}
                    </Text>
                    <MySpacer />
                    <Text className="text-sm">Budget</Text>
                    <Text className="text-sm font-light">${item.budget}</Text>
                    <MySpacer />
                    <Text className="text-sm">Overview</Text>
                    <Text className="text-sm font-light">{item.overview}</Text>
                    <MySpacer />
                    <MySpacer />
                </View>
                <MyButton
                    title="View More Details"
                    rounded={false}
                    onPress={async () => {
                        await RnUtils.openLink(item.homepage)
                    }}
                />
            </View>
        </ScrollView>
    )
}
