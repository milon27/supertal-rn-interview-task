import { z } from "zod"
import { ZodSimpleString } from "../../utils/zod.util"

export const CreateCommentSchema = z.object({
    text: ZodSimpleString,
})

export type ICreateCommentSchema = z.infer<typeof CreateCommentSchema>
