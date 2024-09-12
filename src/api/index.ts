import axios from "axios";
import {
    FundWalletRequest,
    GetRecentContactsResponse,
    GetTransfersResponse,
    GetUsdRatesResponse,
    GetUserResponse,
    TransferAssetRequest,
    TransferAssetResponse
} from "../types/api.types";

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_API || "http://localhost:5000",
});

const getUser = async (token: string) =>
    api.get<GetUserResponse>("/wallet/user",
        { headers: { Authorization: `Bearer ${token}` } });

const transferAsset = async (token: string, data: TransferAssetRequest) =>
    api.post<TransferAssetResponse>("/wallet/transfer-asset", data, { headers: { Authorization: `Bearer ${token}` } })

const fundWallet = async (token: string, data: FundWalletRequest) =>
    api.post("/wallet/fund", data, { headers: { Authorization: `Bearer ${token}` } })

const getTransfers = async (token: string) =>
    api.get<GetTransfersResponse>("/wallet/transfers",
        { headers: { Authorization: `Bearer ${token}` } });

const getRecentContacts = async (token: string) =>
    api.get<GetRecentContactsResponse>("/wallet/recent-contacts",
        { headers: { Authorization: `Bearer ${token}` } });

const getUsdRates = async () =>
    axios.get<GetUsdRatesResponse>("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json");

export { api, getUser, transferAsset, fundWallet, getTransfers, getRecentContacts, getUsdRates };
