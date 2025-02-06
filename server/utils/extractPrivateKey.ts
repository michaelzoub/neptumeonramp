export function cleanUpKey(key: string) {
    const rawKey = key;
    const apiKeyPrivateKey = rawKey.replace(/\\n/g, "\n");

    return apiKeyPrivateKey
}