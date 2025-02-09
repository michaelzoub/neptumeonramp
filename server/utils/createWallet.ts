import { Coinbase, Wallet } from "@coinbase/coinbase-sdk";
import { cleanUpKey } from "./extractPrivateKey";
import dotenv from 'dotenv';
dotenv.config();
const { COINBASE_API_SECRET } = process.env
const { COINBASE_API_NAME } = process.env

const apiKeyName = COINBASE_API_NAME 
const apiKeyPrivateKey = COINBASE_API_SECRET

export async function createWallet() {
    try {
        console.log(`Api Name: ${apiKeyName}, api key: ${apiKeyPrivateKey}`);
        const cleanedUpPrivateKey = cleanUpKey(apiKeyPrivateKey || "nokey");
        Coinbase.configure({ apiKeyName: (apiKeyName || ""), privateKey: (cleanedUpPrivateKey) });
        let wallet = await Wallet.create({ networkId: Coinbase.networks.BaseMainnet });
    
        console.log(wallet)
    
        let address = await wallet.getDefaultAddress();
        console.log(`Address: ${address}`);
    
        //this is the privateKey, make sure headers carefully transport this so privy can interact with it
        //let privateKey = address.export();
        let data = wallet.export();
        console.log(data);
        return data
    } catch (error) {
        console.error(error)
        return {
            privateKey: "",
            address: ""
        }
    }
}