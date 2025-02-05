export function cleanUpKey(key: string) {
    const rawKey = key // Your API key as provided
    const apiKeyPrivateKey = rawKey.replace(/\\n/g, "\n");

    return apiKeyPrivateKey
}