const apiEndpoint = "http://localhost:8080/onrampquestion"

export async function questionOnramp(query: string) {
    const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(query)
    })
    return await response.json()
}