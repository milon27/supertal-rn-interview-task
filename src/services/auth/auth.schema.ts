import { z } from "zod"
import { ZodEmailString, ZodPasswordString, ZodSimpleString } from "../../utils/zod.util"

// * login
export const LoginWithEmailSchema = z
    .object({
        email: ZodEmailString,
        password: ZodPasswordString,
    })
    .strict()

export type ILoginWithEmailSchema = z.infer<typeof LoginWithEmailSchema>

export const LoginWithGoogleSchema = z
    .object({
        idToken: ZodSimpleString,
    })
    .strict()
export type ILoginWithGoogleSchema = z.infer<typeof LoginWithGoogleSchema>

// * register
