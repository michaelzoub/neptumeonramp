import { Coinbase } from "@coinbase/coinbase-sdk";

export async function transferToExternalWallet(wallet: any, targetAddress: string, amount: number) {
    //first instantiate
    try {
        let transfer = await wallet.createTransfer({
            amount: amount,
            assetId: Coinbase.assets.Usdc,
            destination: targetAddress,
            gasless: true
          });
          
          await transfer.wait()
          
          console.log("Transfer results: " + transfer.results)
    } catch (error) {
        console.error(error)
    }

      return
}