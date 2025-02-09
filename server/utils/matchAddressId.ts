export function matchAddressId(walletObjString: string) {
    const match = walletObjString.match(/addressId: '([^']+)'/);
    if (match) {
        return match[1]
    } else {
        return ""
    }
}