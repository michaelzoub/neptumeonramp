import { Coinbase, Wallet } from "@coinbase/coinbase-sdk";
import dotenv from 'dotenv';
dotenv.config();
const { COINBASE_API } = process.env

const apiKeyName = "Copy your secret API key name here."
const apiKeyPrivateKey = "COINBASE_API"

export async function createWallet() {
    let wallet = await Wallet.create();

    let address = await wallet.getDefaultAddress();
    console.log(`Address: ${address}`);

    //this is the privateKey, make sure headers carefully transport this so privy can interact with it
    let privateKey = address.export();
    return privateKey
}