import { Wallet } from "@coinbase/coinbase-sdk";

export async function reinstantiateWallet(wallet: any) {

    let fetchedData = await wallet; 

    let importedWallet = await Wallet.import(fetchedData);
    console.log(importedWallet);
    return importedWallet;
}
