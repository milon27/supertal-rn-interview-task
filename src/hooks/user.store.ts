import { FirebaseAuthTypes } from "@react-native-firebase/auth"
import { shallow } from "zustand/shallow"
import { createWithEqualityFn } from "zustand/traditional"

interface IUserStore {
    user?: FirebaseAuthTypes.User | null
    // * actions
    setCurrentUser: (user: FirebaseAuthTypes.User) => void
    logout: () => void
}

export const useUserStore = createWithEqualityFn<IUserStore>()(set => {
    return {
        user: null,
        // * actions
        setCurrentUser: (user: FirebaseAuthTypes.User) => {
            set(old => ({ ...old, user }))
        },
        logout: () => {
            set(old => ({ ...old, user: undefined }))
        },
    }
}, shallow)

export const useLoggedInUser = () => {
    const user = useUserStore(state => state.user)
    return user
}
