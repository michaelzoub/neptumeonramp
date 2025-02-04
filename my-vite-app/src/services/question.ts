import { apiEndpoint } from "../data/apiEndpoint"

export async function questionOnramp(query: string) {
    const response = await fetch(`${apiEndpoint}/onrampquestion`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(query)
    })
    return await response.json()
}