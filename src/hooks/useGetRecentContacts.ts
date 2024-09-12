import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { getRecentContacts } from "../api"
import { useAuth } from "@clerk/clerk-react"

export const useGetRecentContacts = () => {
    const { getToken } = useAuth();

    return useQuery({
        queryKey: ["getRecentContacts"],
        queryFn: async () => getRecentContacts((await getToken()) as string),
        refetchOnWindowFocus: false,
        placeholderData: keepPreviousData
    })
}