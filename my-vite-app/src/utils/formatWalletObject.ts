import { Wallet } from "../interfaces/Wallet";

export function formatWalletObject(wallet: Wallet) {
    const stringified = `${wallet.networkId}@@@${wallet.seed}@@@${wallet.walletId}`
    return stringified;
}