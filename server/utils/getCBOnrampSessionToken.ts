
export async function getSessionToken(address: string, assets: Array<string>) {
    if (assets.length > 1) {

    }

    const response = await fetch(`https://api.developer.coinbase.com/onramp/v1/token`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            addresses: [address],
            assets: ["ETH"]
        }),
    })
    const body = await response.json()
    console.log("getCBOnrampSession logs: ")
    console.log(response)
    console.log(body)
    return body
} 