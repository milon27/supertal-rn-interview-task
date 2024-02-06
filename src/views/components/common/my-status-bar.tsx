import { useColorScheme } from "nativewind"
import React from "react"
import { StatusBar } from "react-native"
import { TailwindTheme } from "../../../config/theme.config"

export default function MyStatusBar() {
    const { colorScheme } = useColorScheme()

    return (
        <StatusBar
            barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
            backgroundColor={
                colorScheme === "dark" ? TailwindTheme.colors.gray[800] : TailwindTheme.colors.gray[100]
            }
        />
    )
}
