import { NavigationContainer } from "@react-navigation/native"
import { QueryClientProvider } from "@tanstack/react-query"
import React from "react"
import { queryClient } from "./src/config/query.config"
import MyStatusBar from "./src/views/components/common/my-status-bar"
import RootNavigator from "./src/views/components/navigator/root.navigator"

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <MyStatusBar />
                <RootNavigator />
            </NavigationContainer>
        </QueryClientProvider>
    )
}
