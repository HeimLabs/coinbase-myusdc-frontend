import { useMutation, useQueryClient } from "@tanstack/react-query"
import { fundWallet } from "../api"
import { useAuth } from "@clerk/clerk-react"
import { toast } from "react-toastify";
import { useAppUser } from "../contexts/user.context";
import { faucetConfig } from "../config";

export const useFundWallet = (asset: string, amount: number) => {
    const queryClient = useQueryClient();
    const { getToken } = useAuth();
    const { user } = useAppUser();

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
        if (!user) return;
        if (amount > faucetConfig.MAX_REQUEST_AMOUNT)
            return toast.error("Requested amount too high");
        if ((user.faucet.amount + amount) > faucetConfig.MAX_TOTAL_AMOUNT)
            return toast.error("Purchase limit reached");
        if ((user.wallet.usdBalance - amount) <= 0)
            return toast.error("Insufficient balance");
        if (user.faucet.lastRequested) {
            const now = new Date();
            const timeSinceLastRequest = (now.getTime() - (new Date(user.faucet.lastRequested))?.getTime()) / 1000;
            if (timeSinceLastRequest < faucetConfig.MIN_REQUEST_INTERVAL)
                return toast.error("Too many requests, try again later!");
        }

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