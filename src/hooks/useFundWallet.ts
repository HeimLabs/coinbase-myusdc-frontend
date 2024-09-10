import { useMutation, useQueryClient } from "@tanstack/react-query"
import { fundWallet } from "../api"
import { useAuth } from "@clerk/clerk-react"
import { toast } from "react-toastify";

export const useFundWallet = (asset: string, amount: number) => {
    const queryClient = useQueryClient();
    const { getToken } = useAuth();

    const mutation = useMutation({
        mutationFn: async () =>
            fundWallet((await getToken()) as string, { asset, amount }),
        onSuccess: async () => {
            try {
                await queryClient.invalidateQueries({ queryKey: ['getUser'] })
            } catch (err) {
                console.error(err);
            }
        }
    });

    const _fundWallet = () => {
        const _promise = mutation.mutateAsync();
        toast.promise(_promise, {
            pending: "Purchasing...",
            success: "Purchase successful!",
            error: "Purchase failed, please try again!"
        })
    }

    return {
        fundWallet: _fundWallet,
        ...mutation
    }
}