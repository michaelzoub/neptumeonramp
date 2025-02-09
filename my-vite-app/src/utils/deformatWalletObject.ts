export function deformatWalletObject(format: string) {
    const arrayFormat = format.split("@@@");
    console.log(arrayFormat);
    const object = {
        walletId: arrayFormat[2],
        seed: arrayFormat[1],
        networkId: arrayFormat[0]
    }
    console.log(object)
    return object
}