export function matchWalletId(walletObjString: string) {
    const match = walletObjString.match(/walletId: '([^']+)'/);
    if (match) {
        return match[1];
    } else {
        return "";
    }
}