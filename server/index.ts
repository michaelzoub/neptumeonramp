import { runCovalentAgent } from "./utils/covalent/covalentAgent";
import { createWallet } from "./utils/createWallet";
import { getSessionToken } from "./utils/coinbase/getCBOnrampSessionToken";
import { fundWallet } from "./utils/coinbase/fundWallet";
import { matchWalletId } from "./utils/matchWalletId";
import { matchAddressId } from "./utils/matchAddressId";
import { transferToExternalWallet } from "./utils/coinbase/transferToExternalWallet";

console.log("Hello via Bun!");

const corsHeaders = {
    "Access-Control-Allow-Origin": "*", 
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json"
}

Bun.serve({
    port: 3000,
    fetch(req) {
        const url = new URL(req.url)

        if (req.method === "OPTIONS") {
            return new Response(null, { headers: corsHeaders });
        }

        if (url.pathname === "/onramp") {
            //here i'll create wallet and update logic for funding

            //wallet has already prompted user to download whichever kit they picked
            async function onramp() {
                const body = await req.json()
                const createObject = await createWallet()
                //once wallet is setup, get session token to fund account:
                console.log(createObject.address)
                const matchedAddress = matchAddressId(createObject.address.toString())
                const matchedWallet = matchWalletId(createObject.address.toString())
                console.log(matchedAddress)
                const session = await getSessionToken(matchedAddress, ["ETH"])
                return new Response(JSON.stringify({
                    privateKey: matchedWallet,
                    onrampUrl: session
                }), { headers: corsHeaders })
            }
            return  onramp()
        }

        if (url.pathname === "/onrampquestion") {
            async function returning() {
                console.log("Onramp question hit.")
                //simply run the covalent ai agent and return response to frontend: 
                const body = await req.json()
                const response = await runCovalentAgent(body, "")
                console.log(response)
                return new Response(JSON.stringify(response), { headers: corsHeaders })
            }
            return returning()
        }

        if (url.pathname === "/transfer") {
            async function transfer() {
                const body = await req.json();
                await transferToExternalWallet(body.walletId, body.address, body.amount)
                return new Response(JSON.stringify("Successfully sent."), { headers: corsHeaders })
            }
            return transfer()
        }

        if (url.pathname === "balance") {
            
        }

        return new Response("Bun!", { headers: corsHeaders });
    },
  });