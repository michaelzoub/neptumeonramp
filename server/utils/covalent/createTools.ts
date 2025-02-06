import { createTool } from "@covalenthq/ai-agent-sdk";

export async function createTools(information: any) {
    const TokenBalancesTool = createTool({
        id: "get-token-balances",
        description: "Retrieves the token balances for a given wallet address.",
        schema: information.tokenBalances,
        execute: async (params) => {
            return `Token balances retrieved successfully for address`;
        },
    });
    
    const NFTBalancesTool = createTool({
        id: "get-nft-balances",
        description: "Fetches the NFT holdings for a specific wallet address.",
        schema: information.nfts,
        execute: async (params) => {
            return `NFT balances retrieved successfully for address`;
        },
    });
    
    const TransactionsTool = createTool({
        id: "get-transactions",
        description: "Retrieves the transaction history for a given wallet address.",
        schema: information.transactions,
        execute: async (params) => {
            return `Transaction history retrieved successfully for address`;
        },
    });
    

    return {
        TokenBalancesTool: TokenBalancesTool,
        NFTBalancesTool: NFTBalancesTool,
        TransactionsTool: TransactionsTool
    }
}