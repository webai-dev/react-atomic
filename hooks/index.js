import { useQuery } from "@tanstack/react-query"
import { fetchArticle, fetchArticles, getCategoriesAndTags, getToken } from "../services"

export const useGetToken = () => {
    return useQuery({
        queryKey: ['getToken'],
        queryFn: getToken,
        refetchOnWindowFocus: false,
    })
}

export const useCategoriesAndTags = (token) => {
    return useQuery({
        queryKey: ['getCategoriesAndTags', token],
        queryFn: () => getCategoriesAndTags(token),
        enabled: token !== null,
        refetchOnWindowFocus: false,
    })
}

export const useFetchArticles = (token, payload) => {
    return useQuery({
        queryKey: ["fetchArticles", token, payload],
        queryFn: () => fetchArticles(token, payload),
        enabled: token !== null && payload !== null,
        refetchOnWindowFocus: false,
    })
}

export const useFetchArticle = (token, payload, id) => {
    return useQuery({
        queryKey: ["fetchArticle", token, payload, id],
        queryFn: () => fetchArticle(token, payload, id),
        enabled: token !== null && id !== null,
        refetchOnWindowFocus: false,
    })
}