import { apiEndpoint } from "../data/apiEndpoint"

export async function getExistingAccountBalance(walletId: string) {
    const response = await fetch(`${apiEndpoint}/getBalance`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            walletId
        })
    })
    return await response.json()
}