import { zodResolver } from "@hookform/resolvers/zod"
import { GoogleSignin } from "@react-native-google-signin/google-signin"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { EnvConfig } from "../../../config/env.config"
import { ILoginWithEmailSchema, LoginWithEmailSchema } from "../../../services/auth/auth.schema"
import { AuthService } from "../../../services/auth/auth.service"
import { RnUtils } from "../../../utils/rn.util"

export const useAuthController = () => {
    GoogleSignin.configure({
        webClientId: EnvConfig.GOOGLE_WEB_CLIENT_ID,
    })

    const [loading, setLoading] = useState(false)
    const [loadingGoogle, setLoadingGoogle] = useState(false)

    const { control, handleSubmit, reset } = useForm<ILoginWithEmailSchema>({
        resolver: zodResolver(LoginWithEmailSchema),
        defaultValues: {
            email: "aba@g.com",
            password: "1234567",
        },
    })

    const onSubmit = async (data: ILoginWithEmailSchema) => {
        try {
            setLoading(true)
            await AuthService.loginWithEmail(data)
            RnUtils.toast("Login SuccessFull")
        } catch (error) {
            console.error(error)
            // Alert.alert((error as Error).message)
            RnUtils.toast("No User Found With This Email")
        } finally {
            setLoading(false)
        }
    }
    const onLoginGoogle = async () => {
        try {
            setLoadingGoogle(true)
            await AuthService.loginWithGoogle()
            RnUtils.toast("Login SuccessFull")
        } catch (error) {
            console.error(error)
            // Alert.alert((error as Error).message)
            RnUtils.toast("Something went wrong")
        } finally {
            setLoadingGoogle(false)
        }
    }

    const onRegisterSubmit = async (data: ILoginWithEmailSchema) => {
        try {
            setLoading(true)
            await AuthService.createWithEmail(data)
            RnUtils.toast("Create Account Successfully")
        } catch (error) {
            console.error("Create with email:onSubmit:->", error)
            // todo: do proper error handling
            RnUtils.toast("Email is already in use")
        } finally {
            setLoading(false)
        }
    }

    return {
        loading,
        loadingGoogle,
        control,
        onLoginGoogle,
        onSubmit: handleSubmit(onSubmit),
        onRegisterSubmit: handleSubmit(onRegisterSubmit),
    }
}
