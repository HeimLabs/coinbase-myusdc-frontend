import axios from "axios";
import {
    FundWalletRequest,
    GetRecentContactsResponse,
    GetTransfersResponse,
    GetUserResponse,
    TransferAssetRequest
} from "../types/api.types";

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_API || "http://localhost:5000",
});

const getUser = async (token: string) =>
    api.get<GetUserResponse>("/wallet/user",
        { headers: { Authorization: `Bearer ${token}` } });

const transferAsset = async (token: string, data: TransferAssetRequest) =>
    api.post("/wallet/transfer-asset", data, { headers: { Authorization: `Bearer ${token}` } })

const fundWallet = async (token: string, data: FundWalletRequest) =>
    api.post("/wallet/fund", data, { headers: { Authorization: `Bearer ${token}` } })

const getTransfers = async (token: string) =>
    api.get<GetTransfersResponse>("/wallet/transfers",
        { headers: { Authorization: `Bearer ${token}` } });

const getRecentContacts = async (token: string) =>
    api.get<GetRecentContactsResponse>("/wallet/recent-contacts",
        { headers: { Authorization: `Bearer ${token}` } });

export { api, getUser, transferAsset, fundWallet, getTransfers, getRecentContacts };
