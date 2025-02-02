import { runCovalentAgent } from "./utils/covalentAgent";
import { createWallet } from "./utils/createWallet";

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

        if (req.url == "/onramp") {
            //here i'll create wallet and update logic for funding

            //wallet has already prompted user to download whichever kit they picked
            async function onramp() {
                const privateKey = await createWallet()
                return new Response(JSON.stringify(privateKey))
            }
            return  onramp()
        }

        if (req.url == "/onrampquestion") {
            async function returning() {
                //simply run the covalent ai agent and return response to frontend:
                const body = await req.json()
                const response = await runCovalentAgent(body)
                return new Response(JSON.stringify(response))
            }
            return returning()
        }

        return new Response("Bun!");
    },
  });