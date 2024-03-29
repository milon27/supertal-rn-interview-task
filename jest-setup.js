const { jest } = require("@jest/globals")

module.exports = {
    initAll: function () {
        jest.mock("Linking", () => ({
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            openURL: jest.fn(() => Promise.resolve()),
            canOpenURL: jest.fn(() => Promise.resolve()),
            getInitialURL: jest.fn(() => Promise.resolve()),
        }))

        jest.mock("NetInfo", () => {
            return {
                isConnected: {
                    fetch: () => {
                        return new Promise(accept => {
                            accept(true)
                        })
                    },
                },
            }
        })

        global.navigator = {
            geolocation: {
                clearWatch: jest.fn(),
                getCurrentPosition: jest.fn(),
                stopObserving: jest.fn(),
                watchPosition: jest.fn(),
            },
        }

        console.error = jest.fn()
    },
}
