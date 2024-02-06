import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React, { useEffect, useState } from "react"
import MyLoading from "../common/my-loading"
import AuthNavigator from "./auth.navigator"
import HomeNavigator from "./home.navigator"

const RootStack = createNativeStackNavigator()

export default function RootNavigator() {
    const [initializing, setInitializing] = useState(true)
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>()

    // Handle user state changes

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(user => {
            setUser(user)
            if (initializing) setInitializing(false)
        })
        return subscriber // unsubscribe on unmount
    }, [])

    if (initializing) return <MyLoading />

    return (
        <>
            <RootStack.Navigator screenOptions={{ headerShown: false, animation: "fade_from_bottom" }}>
                {user ? (
                    <RootStack.Screen name="Home" component={HomeNavigator} />
                ) : (
                    <RootStack.Screen name="Auth" component={AuthNavigator} />
                )}
            </RootStack.Navigator>
        </>
    )
}