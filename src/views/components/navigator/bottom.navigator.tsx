import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { RouteProp } from "@react-navigation/native"
import React from "react"
import { NavUrl } from "../../../constants/nav-url.constant"
import HomeScreen from "../../screens/home/latest.screen"
import PopularScreen from "../../screens/home/popular.screen"

// maybe-todo: define other navigator type, write doc in notion for login with google and auth nav type
type TypeHomeNavigatorParamsList = {
    [NavUrl.LATEST]: undefined
    [NavUrl.POPULAR]: undefined
}

export type TypeHomeBottomNavigationProp = BottomTabNavigationProp<TypeHomeNavigatorParamsList> // useNavigation will use this
export type TypeHomeBottomNavRouteProp = RouteProp<TypeHomeNavigatorParamsList> // useParam will use this

const HomeBottomNav = createBottomTabNavigator<TypeHomeNavigatorParamsList>()

export default function HomeBottomNavigator() {
    return (
        <HomeBottomNav.Navigator screenOptions={{ headerShown: false }}>
            <HomeBottomNav.Screen name={NavUrl.LATEST} component={HomeScreen} />
            <HomeBottomNav.Screen name={NavUrl.POPULAR} component={PopularScreen} />
        </HomeBottomNav.Navigator>
    )
}
