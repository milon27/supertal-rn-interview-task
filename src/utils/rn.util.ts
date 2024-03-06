import AsyncStorage from "@react-native-async-storage/async-storage"
import { Alert, Dimensions, Linking, ToastAndroid } from "react-native"
import { ICreateComment } from "../services/movie/movie.dto"

export const RnUtils = {
    getDeviceHeight: () => {
        return Dimensions.get("window").height
    },
    getDeviceWidth: () => {
        return Dimensions.get("window").width
    },
    getShadowStyle: () => {
        return {
            // shadowColor: TailwindTheme.colors.gray[600],
            elevation: 1.2,
        }
    },
    toast: (title: string, longOrShort: number = ToastAndroid.SHORT) => {
        ToastAndroid.showWithGravity(title, longOrShort, ToastAndroid.BOTTOM)
    },
    openLink: async (url: string) => {
        try {
            await Linking.openURL(url)
        } catch (error) {
            Alert.alert(`Don't know how to open this URL: ${url}`)
        }
    },
    setData: async (key: string, value: ICreateComment[]) => {
        const valueString = JSON.stringify(value)
        await AsyncStorage.setItem(key, valueString)
    },
    getData: async <T>(key: string) => {
        const valueString = await AsyncStorage.getItem(key)
        if (valueString) {
            const value = JSON.parse(valueString)
            return value as T
        }
        return undefined
    },
}
