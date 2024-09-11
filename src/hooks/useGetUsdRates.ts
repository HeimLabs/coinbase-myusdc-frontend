import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { getUsdRates } from "../api"

export const useGetUsdRates = () => {
    return useQuery({
        queryKey: ["getUsdRates"],
        queryFn: async () => getUsdRates(),
        placeholderData: keepPreviousData,
        refetchOnWindowFocus: false,
        refetchInterval: 60000 // 1 minute
    });
}