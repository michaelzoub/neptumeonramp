
const apiKey = ""
export async function getSessionToken(address: string, assets: Array<string>) {
    if (assets) {

    }

    const response = await fetch(`https://api.developer.coinbase.com/onramp/v1/token`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            addresses: [address],
            assets: ["ETH"]
        }),
    })
    const body = await response.json()
    return body
} 