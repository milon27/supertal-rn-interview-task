import { RouteProp } from "@react-navigation/native"
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack"
import React from "react"
import { NavUrl } from "../../../constants/nav-url.constant"
import LoginScreen from "../../screens/auth/login.screen"

// maybe-todo: define other navigator type, write doc in notion for login with google and auth nav type
type TypeAuthNavigatorParamsList = {
    [NavUrl.LOGIN]: undefined
    [NavUrl.REGISTER]: undefined
    [NavUrl.FORGET_PASSWORD]: undefined
    [NavUrl.RESET_PASSWORD]: undefined
}

export type TypeAuthNavigationProp = NativeStackNavigationProp<TypeAuthNavigatorParamsList> // useNavigation will use this
export type TypeAuthRouteProp = RouteProp<TypeAuthNavigatorParamsList> // useParam will use this

const AuthStackNav = createNativeStackNavigator<TypeAuthNavigatorParamsList>()

// login,register,forget-password
export default function AuthNavigator() {
    return (
        <AuthStackNav.Navigator screenOptions={{ headerShown: false, animation: "fade_from_bottom" }}>
            <AuthStackNav.Screen name={NavUrl.LOGIN} component={LoginScreen} />
            {/* <AuthStackNav.Screen name={NavUrl.REGISTER} component={RegisterScreen} /> */}
            {/* <AuthStackNav.Screen name={NavUrl.FORGET_PASSWORD} component={ForgetPasswordScreen} /> */}
            {/* <AuthStackNav.Screen name={NavUrl.RESET_PASSWORD} component={ResetPasswordScreen} /> */}
        </AuthStackNav.Navigator>
    )
}
