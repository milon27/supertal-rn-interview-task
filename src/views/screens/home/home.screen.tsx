import React from "react"
import { Text, View } from "react-native"
import { AuthService } from "../../../services/auth/auth.service"
import MyButton from "../../components/common/my-button"

export default function HomeScreen() {
    return (
        <View>
            <Text>HomeScreen</Text>
            <MyButton
                variant="accent"
                title="logout"
                onPress={async () => {
                    await AuthService.logout()
                }}
            />
        </View>
    )
}
