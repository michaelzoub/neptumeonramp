import { apiEndpoint } from "../data/apiEndpoint"
import { Wallet } from "../interfaces/Wallet"

export async function getExistingAccountBalance(walletId: Wallet) {
    const response = await fetch(`${apiEndpoint}/balance`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            walletId
        )
    })
    return await response.json()
}