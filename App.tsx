import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import MyStatusBar from "./src/views/components/common/my-status-bar"
import RootNavigator from "./src/views/components/navigator/root.navigator"

export default function App() {
    return (
        <NavigationContainer>
            <MyStatusBar />
            <RootNavigator />
        </NavigationContainer>
    )
}
