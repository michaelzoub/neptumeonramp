import { apiEndpoint } from "../data/apiEndpoint"

export async function transferToExternalWallet(walletId: string, targetAddress: string, amount: number) {
    const response = await fetch(`${apiEndpoint}/transfer`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            address: targetAddress,
            amount: amount
        })
    })
    return await response.json()
}