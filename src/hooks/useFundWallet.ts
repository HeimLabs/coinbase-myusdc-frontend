import { useMutation } from "@tanstack/react-query"
import { fundWallet } from "../api"
import { useAuth } from "@clerk/clerk-react"

export const useFundWallet = (asset: string, amount: number) => {
    const { getToken } = useAuth();

    const mutation = useMutation({
        mutationFn: async () =>
            fundWallet((await getToken()) as string, { asset, amount })
    });

    return {
        fundWallet: mutation.mutateAsync,
        ...mutation
    }
}