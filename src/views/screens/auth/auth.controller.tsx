import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Alert } from "react-native"
import { ILoginWithEmailSchema, LoginWithEmailSchema } from "../../../services/auth/auth.schema"
import { AuthService } from "../../../services/auth/auth.service"
import { RnUtils } from "../../../utils/rn.util"

export const useAuthController = () => {
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

    const onRegisterSubmit = async (data: ILoginWithEmailSchema) => {
        try {
            setLoading(true)
            await AuthService.createWithEmail(data)
            RnUtils.toast("Create Account Successfully")
        } catch (error) {
            console.error("Create with email:onSubmit:->", error)
            Alert.alert((error as Error).message)
        } finally {
            setLoading(false)
        }
    }

    return {
        loading,
        loadingGoogle,
        control,
        onSubmit: handleSubmit(onSubmit),
        onRegisterSubmit: handleSubmit(onRegisterSubmit),
    }
}
