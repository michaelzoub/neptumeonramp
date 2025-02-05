import { Wallet } from "@coinbase/coinbase-sdk";

async function hydrateWallet(wallet: any) {
    const fetchedWallet = await Wallet.fetch(wallet.getId());

    console.log(`fetchedWallet is hydrated: ${fetchedWallet.canSign()}`);

    // To hydrate the wallet, set the correct seed on it.
    fetchedWallet.setSeed(fetchedData.seed);

    // The wallet is now hydrated, and can create addresses and sign transactions.
    console.log(`fetchedWallet is hydrated: ${fetchedWallet.canSign()}`);
}