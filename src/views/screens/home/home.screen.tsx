import React from "react"
import { Image, ScrollView, Text, View } from "react-native"
import { useLoggedInUser } from "../../../hooks/user.store"
import { AuthService } from "../../../services/auth/auth.service"
import MyButton from "../../components/common/my-button"
import MySpacer from "../../components/common/my-spacer"

export default function HomeScreen() {
    const user = useLoggedInUser()
    return (
        <ScrollView>
            <View className="flex-1 p-2">
                <View className="p-2">
                    <Text className="text-lg">Welcome </Text>
                    <Text className="text-2xl text-primary font-bold">{user?.displayName || user?.email}</Text>
                </View>
                <MySpacer />
                {/* product grid */}
                <View className="flex flex-row flex-wrap">
                    {[1, 2, 3, 4, 5, 6, 7].map(item => {
                        return (
                            <View key={item} className="w-1/2 p-2">
                                <View className="rounded-md bg-gray-200 p-3 flex flex-col justify-center items-center">
                                    <Image
                                        className="w-36 h-48 rounded-lg"
                                        source={{
                                            uri: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                                        }}
                                    />
                                    <MySpacer />
                                    <Text className="text-primary font-semibold text-lg text-center">
                                        Product Title sdfasfd
                                    </Text>
                                    <Text className="text-center">Price: 10 $</Text>
                                </View>
                            </View>
                        )
                    })}
                </View>
                <MySpacer />
                {/* logout */}
                <MyButton
                    variant="outline"
                    title="Logout"
                    onPress={async () => {
                        await AuthService.logout()
                    }}
                />
            </View>
        </ScrollView>
    )
}
