

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
        }

        return new Response("Bun!");
    },
  });