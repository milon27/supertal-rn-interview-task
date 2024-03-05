import { Alert, Dimensions, Linking, ToastAndroid } from "react-native"

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
}
