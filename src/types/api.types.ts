export type User = {
    userId: string;
    name: string;
    email: string;
    imageUrl: string;
    wallet: {
        usdBalance: number;
        usdcBalance: number | null;
        id: string;
        address: string;
        rewards: {
            amount: number;
            lastUpdated: Date;
        };
    }
}

export type GetUserResponse = User;

export type TransferAssetRequest = {
    asset: string,
    data: {
        recipient: string;
        amount: number;
    }
}

export type TransferAssetResponse = {
    transactionLink: string,
    status: string
}


export type FundWalletRequest = {
    asset: string,
    amount: number
}

export type Transfer = {
    id: string;
    destinationAddress: string;
    destinationUser: User | null;
    assetId: string;
    amount: number;
    transactionLink: string | undefined;
    status: string;
}

export type GetTransfersResponse = {
    transfers: Transfer[]
}

export type RecentContact = {
    destinationAddress: string,
    destinationUser: User | null
}

export type GetRecentContactsResponse = {
    recentContacts: RecentContact[]
}

export type GetUsdRatesResponse = {
    date: string,
    usd: {
        cad: number,
        aud: number,
        gbp: number
    }
}