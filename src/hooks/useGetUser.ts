import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { getUser } from "../api"
import { useAuth } from "@clerk/clerk-react"

export const useGetUser = () => {
    const { getToken, isLoaded, isSignedIn } = useAuth();

    return useQuery({
        queryKey: ["getUser", isLoaded, isSignedIn],
        queryFn: async () => getUser((await getToken()) as string),
        placeholderData: keepPreviousData,
        refetchOnWindowFocus: false,
        enabled: !!isSignedIn
    });
}