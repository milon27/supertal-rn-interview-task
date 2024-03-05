import { RouteProp } from "@react-navigation/native"
import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { NavUrl } from "../../../constants/nav-url.constant"
import DetailsScreen from "../../screens/details/details.screen"
import HomeBottomNavigator from "./bottom.navigator"

type TypeRootNavigatorParamsList = {
    [NavUrl.HOME]: undefined
    [NavUrl.DETAILS]: {
        id: number
    }
}

export type TypeRootNavigationProp = NativeStackNavigationProp<TypeRootNavigatorParamsList> // useNavigation will use this
export type TypeRootRouteProp = RouteProp<TypeRootNavigatorParamsList> // useParam will use this

const RootStack = createNativeStackNavigator<TypeRootNavigatorParamsList>()

export default function RootNavigator() {
    return (
        <>
            <RootStack.Navigator screenOptions={{ headerShown: false, animation: "fade_from_bottom" }}>
                <RootStack.Screen name={NavUrl.HOME} component={HomeBottomNavigator} />
                <RootStack.Screen name={NavUrl.DETAILS} component={DetailsScreen} />
            </RootStack.Navigator>
        </>
    )
}
