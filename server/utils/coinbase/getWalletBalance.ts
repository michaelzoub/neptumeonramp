

export async function getWalletBalance(wallet: any) {
    let balance = await wallet.listBalances();
    console.log(balance)
    return balance;
}