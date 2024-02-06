import { useNavigation } from "@react-navigation/native"
import React from "react"
import { Text, View } from "react-native"
import { NavUrl } from "../../../constants/nav-url.constant"
import MyInputWithRHF from "../../components/common/form/my-input"
import MyButton from "../../components/common/my-button"
import MySpacer from "../../components/common/my-spacer"
import { TypeAuthNavigationProp } from "../../components/navigator/auth.navigator"
import { useAuthController } from "./auth.controller"

export default function RegisterScreen() {
    const { control, loading, onRegisterSubmit } = useAuthController()
    const { navigate } = useNavigation<TypeAuthNavigationProp>()
    return (
        <View className="p-4 flex-1 justify-center">
            <Text className="text-lg">Register into</Text>
            <Text className="text-2xl text-primary font-bold">Fake Store</Text>
            <MySpacer />
            <MyInputWithRHF control={control} name="email" label="Enter email" placeholder="user@gmail.com" />
            <MySpacer />
            <MyInputWithRHF control={control} name="password" label="Enter password" placeholder="*****" />
            <MySpacer />
            <MyButton
                variant="primary"
                title="Register Now"
                onPress={onRegisterSubmit}
                loading={loading}
                disabled={loading}
                rounded={false}
            />
            <MySpacer />
            <Text className="text-lg text-center text-gray-400">or</Text>
            <MySpacer />
            <MyButton
                variant="fill"
                title="Already Have Account? Login Now"
                onPress={() => {
                    navigate(NavUrl.LOGIN)
                }}
                rounded={false}
            />
            <MySpacer />
        </View>
    )
}
