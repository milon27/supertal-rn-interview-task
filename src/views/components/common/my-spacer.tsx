import React from "react"
import { View, ViewProps } from "react-native"

export default function MySpacer({ style }: ViewProps) {
    return <View className={`${style || "my-1.5"}`} style={style} />
}
