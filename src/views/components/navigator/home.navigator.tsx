import { RouteProp } from "@react-navigation/native"
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack"
import React from "react"
import { NavUrl } from "../../../constants/nav-url.constant"
import HomeScreen from "../../screens/home/home.screen"
import ProductDetailsScreen from "../../screens/product-details/product-details.screen"

// maybe-todo: define other navigator type, write doc in notion for login with google and auth nav type
type TypeHomeNavigatorParamsList = {
    [NavUrl.HOME]: undefined
    [NavUrl.DETAILS]: {
        id: number
    }
}

export type TypeHomeNavigationProp = NativeStackNavigationProp<TypeHomeNavigatorParamsList> // useNavigation will use this
export type TypeHomeRouteProp = RouteProp<TypeHomeNavigatorParamsList> // useParam will use this

const HomeStackNav = createNativeStackNavigator<TypeHomeNavigatorParamsList>()

// login,register,forget-password
export default function HomeNavigator() {
    return (
        <HomeStackNav.Navigator screenOptions={{ headerShown: false, animation: "fade_from_bottom" }}>
            <HomeStackNav.Screen name={NavUrl.HOME} component={HomeScreen} />
            <HomeStackNav.Screen name={NavUrl.DETAILS} component={ProductDetailsScreen} />
        </HomeStackNav.Navigator>
    )
}
