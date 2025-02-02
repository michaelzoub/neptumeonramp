import { apiEndpoint } from "../data/apiEndpoint"

export async function questionOnramp(wallet: string, depositAmount: number, ) {
    const response = await fetch(`${apiEndpoint}/onramp`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            wallet: wallet,
            depositAmount: depositAmount
        })
    })
    return await response.json()
}