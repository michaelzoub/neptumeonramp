import { Coinbase } from "@coinbase/coinbase-sdk";

export async function sendFunds(wallet: any, destination: string, amountEth: number) {
    const transfer = await wallet.createTransfer({
        amount: amountEth,
        assetId: Coinbase.assets.Eth,
        destination: destination,
      });
      
      await transfer.wait()
      
      if (transfer.getStatus() === 'complete') {
        console.log(`Transfer successfully completed: `, transfer.toString());
      } else {
        console.error('Transfer failed on-chain: ', transfer.toString());
      }
}