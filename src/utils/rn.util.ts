import { Alert, Dimensions, Linking, ToastAndroid } from "react-native"

export const RnUtils = {
    getDeviceHeight: () => {
        return Dimensions.get("window").height
    },
    getDeviceWidth: () => {
        return Dimensions.get("window").width
    },
    getMarginTopInPx: () => {
        const screenHeight = RnUtils.getDeviceHeight()
        const referenceScreenHeight = 550 // Reference height for 6-inch screen in points
        const marginTop = (screenHeight - referenceScreenHeight) / 2
        return marginTop
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
        // const supported = await Linking.canOpenURL(url) //To check if URL is supported or not.
        // if (supported) {
        //     await Linking.openURL(url) // It will open the URL on browser.
        // } else {
        //     Alert.alert(`Don't know how to open this URL: ${url}`)
        // }
    },
}
