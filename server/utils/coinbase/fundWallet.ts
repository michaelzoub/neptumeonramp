//this is only for us wallets with added debit cards, keep this for later!

export async function fundWallet(wallet: any, amount: number, assetId: string) {

    if (amount < 20) {
        return false;
    }

    try {
        // Obtain a quote for funding a wallet with 100 USDC
        const myQuote = await wallet.quoteFund({ amount: amount, assetId: assetId });

        // Parameters of the quote you can inspect to see if you want to execute it.
        // Crypto Amount requested
        console.log(myQuote.getAmount().getAmount());
        // Crypto Amount converted to Fiat + Buy Fee
        console.log(myQuote.getFiatAmount());
        // Buy fee
        console.log(myQuote.getBuyFee().amount);
        // Transfer fee
        console.log(myQuote.getTransferFee().getAmount());

        let fundOperation = await myQuote.execute();

        // Wait for the funding operation to settle
        await fundOperation.wait();

        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}