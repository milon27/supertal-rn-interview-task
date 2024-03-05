module.exports = {
    preset: "react-native",
    setupFiles: ["./node_modules/react-native-gesture-handler/jestSetup.js", "./jest-setup.js"],
    transformIgnorePatterns: [
        "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|@react-native-community|@react-navigation)",
    ],
    testPathIgnorePatterns: [],
}
