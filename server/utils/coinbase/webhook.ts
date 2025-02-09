export async function webhook(wallet: any) {
    let webhook = await wallet.createWebhook('http://localhost:5137/')
}