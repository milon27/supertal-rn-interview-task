import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { RouteProp } from "@react-navigation/native"
import { useColorScheme } from "nativewind"
import React from "react"
import Icon from "react-native-vector-icons/Ionicons"
import { TailwindTheme } from "../../../config/theme.config"
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
    const { colorScheme } = useColorScheme()

    return (
        <HomeBottomNav.Navigator
            screenOptions={({ route }) => {
                return {
                    headerShown: false,
                    tabBarActiveTintColor: TailwindTheme.colors.primary,
                    tabBarInactiveTintColor: TailwindTheme.colors.primary,
                    tabBarShowLabel: true,
                    tabBarStyle: {
                        height: 70, // 65
                        paddingTop: 4, //8
                        paddingBottom: 4, //0
                        backgroundColor:
                            colorScheme === "light"
                                ? TailwindTheme.colors.gray[100]
                                : TailwindTheme.colors.gray[800],
                        borderColor:
                            colorScheme === "light"
                                ? TailwindTheme.colors.gray[100]
                                : TailwindTheme.colors.gray[800],
                    },
                    tabBarLabelStyle: {
                        paddingBottom: 4,
                        textTransform: "capitalize",
                    },
                    tabBarIcon: ({ color, focused }) => {
                        let icon = focused ? "albums" : "albums-outline"
                        switch (route.name) {
                            case NavUrl.LATEST:
                                icon = focused ? "albums" : "albums-outline"
                                break
                            case NavUrl.POPULAR:
                                icon = focused ? "bonfire" : "bonfire-outline"
                                break
                            default:
                                break
                        }
                        return <Icon name={icon} size={30} color={color} />
                    },
                }
            }}>
            <HomeBottomNav.Screen name={NavUrl.LATEST} component={HomeScreen} />
            <HomeBottomNav.Screen name={NavUrl.POPULAR} component={PopularScreen} />
        </HomeBottomNav.Navigator>
    )
}
