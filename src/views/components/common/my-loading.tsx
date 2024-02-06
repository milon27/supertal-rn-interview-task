import React from "react"
import { ActivityIndicator, Text, View } from "react-native"
import { TailwindTheme } from "../../../config/theme.config"

export default function MyLoading({ size = 30 }: { size?: number }) {
    return (
        <View className="flex-1 justify-center items-center">
            <ActivityIndicator color={TailwindTheme.colors.primary} size={size} />
            <Text className="text-primary mt-2 text-lg">loading..</Text>
        </View>
    )
}
