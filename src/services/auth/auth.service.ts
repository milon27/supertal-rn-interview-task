import auth from "@react-native-firebase/auth"
import { ILoginWithEmailSchema } from "./auth.schema"

export const AuthService = {
    createWithEmail: async (input: ILoginWithEmailSchema) => {
        const result = await auth().createUserWithEmailAndPassword(input.email, input.password)
        return result
        // .then(() => {
        //     console.log("User account created & signed in!")
        // })
        // .catch(error => {
        //     if (error.code === "auth/email-already-in-use") {
        //         throw new Error("That email address is already in use!")
        //     }

        //     if (error.code === "auth/invalid-email") {
        //         throw new Error("That email address is invalid!")
        //     }
        //     throw error
        // })
    },
    loginWithEmail: async (input: ILoginWithEmailSchema) => {
        const result = await auth().signInWithEmailAndPassword(input.email, input.password)
        return result
    },
    logout: async () => {
        await auth().signOut()
    },
}
