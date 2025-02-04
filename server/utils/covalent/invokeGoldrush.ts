import { GoldRushClient } from "@covalenthq/client-sdk";
import dotenv from 'dotenv';
dotenv.config();
const { GOLDRUSH_API } = process.env

export const ApiServices = async (address: string) => {
    const client = new GoldRushClient(GOLDRUSH_API); 
    const respone = await client.BalanceService.getTokenBalancesForWalletAddress("eth-mainnet", address); 
    const responseTwo = await client.NftService.getNftsForAddress("eth-mainnet", address)
    const responseThree = await client.TransactionService.getAllTransactionsForAddress("eth-mainnet", address)
    if (!respone.error) {
        console.log(respone.data);
    } else {
        console.log(respone.error_message);
    }
    return {
        tokenBalances: respone,
        nfts: responseTwo,
        transactions: responseThree
    }
}

