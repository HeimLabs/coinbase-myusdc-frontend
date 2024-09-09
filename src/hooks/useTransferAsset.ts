import { useMutation } from "@tanstack/react-query"
import { transferAsset } from "../api"
import { useAuth } from "@clerk/clerk-react"

export const useTransferAsset = (recipient: string, asset: string, amount: number) => {
    const { getToken } = useAuth();

    const mutation = useMutation({
        mutationFn: async () =>
            transferAsset((await getToken()) as string, { asset, data: { recipient, amount } })
    });

    return {
        transferAsset: mutation.mutateAsync,
        ...mutation
    }
}