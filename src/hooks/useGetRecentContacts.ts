import { useQuery } from "@tanstack/react-query"
import { getRecentContacts } from "../api"
import { useAuth } from "@clerk/clerk-react"
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { GetRecentContactsResponse, RecentContact } from "../types/api.types";

export const useGetRecentContacts = () => {
    const { getToken } = useAuth();

    const placeholderData: RecentContact[] = [
        {
            destinationAddress: 'vitalik.eth',
            destinationUser: {
                email: undefined,
                name: 'Vitalik Buterin',
                imageUrl: 'https://avatar.iran.liara.run/public/49',
                wallet: {
                    address: 'vitalik.eth'
                }
            }
        },
        {
            destinationAddress: 'dan.base.eth',
            destinationUser: {
                email: undefined,
                name: 'Dan Kim',
                imageUrl: 'https://avatar.iran.liara.run/public/40',
                wallet: {
                    address: 'dan.base.eth'
                }
            }
        },
        {
            destinationAddress: 'jesse.base.eth',
            destinationUser: {
                email: undefined,
                name: 'Jesse Pollak',
                imageUrl: 'https://avatar.iran.liara.run/public/41',
                wallet: {
                    address: 'jesse.base.eth'
                }
            }
        },
        {
            destinationAddress: 'yuga.eth',
            destinationUser: {
                email: undefined,
                name: 'Yuga Cohler',
                imageUrl: 'https://avatar.iran.liara.run/public/32',
                wallet: {
                    address: 'yuga.eth'
                }
            }
        },
        {
            destinationAddress: 'jnix.base.eth',
            destinationUser: {
                email: undefined,
                name: 'Josh Nickerson',
                imageUrl: 'https://avatar.iran.liara.run/public/6',
                wallet: {
                    address: 'jnix.base.eth'
                }
            }
        },
    ]

    const initialData = {
        data: { recentContacts: placeholderData },
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {} as AxiosRequestConfig,
    } as AxiosResponse<GetRecentContactsResponse>

    return useQuery({
        queryKey: ["getRecentContacts"],
        queryFn: async () => getRecentContacts((await getToken()) as string),
        refetchOnWindowFocus: false,
        initialData: initialData,
        placeholderData: (prevData) => {
            if (prevData?.data.recentContacts.length
                && prevData?.data.recentContacts.length > 0) return prevData;
            else return initialData;
        },
        select: (data) => {
            if (data?.data.recentContacts.length
                && data?.data.recentContacts.length > 0) return data;
            else return initialData;
        }
    })
}