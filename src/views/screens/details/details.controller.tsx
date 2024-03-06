import { zodResolver } from "@hookform/resolvers/zod"
import { useRoute } from "@react-navigation/native"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import uuid from "react-native-uuid"
import { QUERY_KEYS } from "../../../config/query.config"
import { ICreateComment } from "../../../services/movie/movie.dto"
import { CreateCommentSchema, ICreateCommentSchema } from "../../../services/movie/movie.schema"
import { MovieService } from "../../../services/movie/movie.service"
import { RnUtils } from "../../../utils/rn.util"
import { TypeRootRouteProp } from "../../components/navigator/root.navigator"

export const useDetailsController = () => {
    const { params } = useRoute<TypeRootRouteProp>()

    const { data, isLoading, error } = useQuery({
        queryKey: [QUERY_KEYS.LATEST_MOVIE, params?.id],
        queryFn: () => {
            if (!params?.id) {
                throw new Error("Not Found")
            }
            return MovieService.getSingle(params?.id)
        },
    })

    // form
    const { control, handleSubmit, reset } = useForm<ICreateCommentSchema>({
        resolver: zodResolver(CreateCommentSchema),
    })

    const [comments, setComments] = useState<ICreateComment[]>([])

    const onSubmit = async (input: ICreateCommentSchema) => {
        try {
            if (!params?.id) {
                RnUtils.toast("invalid Movie Id")
            }
            const id = uuid.v4() as string
            const commentObj: ICreateComment = {
                id,
                createdAt: new Date().toISOString(),
                movieId: Number(params?.id),
                text: input.text,
                userId: "user1",
            }
            await MovieService.addComment(commentObj)
            setComments(old => {
                const tmp = [commentObj, ...old]
                return tmp
            })
            reset()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const load = async () => {
            if (!params?.id) {
                RnUtils.toast("invalid Movie Id")
            }
            const list = await MovieService.getComment(Number(params?.id))
            setComments(list)
        }
        load()
    }, [])

    return {
        movie: data,
        isLoading,
        error,
        control,
        handleSubmit: handleSubmit(onSubmit),
        comments,
    }
}
