import { Wallet } from "@coinbase/coinbase-sdk";
//reinstated wallet, user can now send funds!

export async function reinstantiateWallet(wallet: any) {

    let fetchedData = await wallet; 

    let importedWallet = await Wallet.import(fetchedData);
    console.log(importedWallet);
    return importedWallet;
}
