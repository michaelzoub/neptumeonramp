import dotenv from 'dotenv';
dotenv.config();
const { CB_APP_ID } = process.env


export async function getSessionToken(address: string, assets: Array<string>) {

    const onrampURL = `https://pay.coinbase.com/buy/select-asset?appId=5${CB_APP_ID}&addresses={${address}:["base"]}&assets=["USDC","ETH"]`
    console.log("getCBOnrampSession logs: ", onrampURL)
    return onrampURL
} 