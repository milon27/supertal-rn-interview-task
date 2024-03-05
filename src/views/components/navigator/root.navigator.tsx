import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import HomeNavigator from "./home.navigator"

const RootStack = createNativeStackNavigator()

export default function RootNavigator() {
    return (
        <>
            <RootStack.Navigator screenOptions={{ headerShown: false, animation: "fade_from_bottom" }}>
                <RootStack.Screen name="Home" component={HomeNavigator} />
            </RootStack.Navigator>
        </>
    )
}
