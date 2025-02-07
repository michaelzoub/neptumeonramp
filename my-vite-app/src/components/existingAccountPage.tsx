import { existingAccountAtom } from "../atoms/existingAccount"
import { useAtom } from "jotai"
import { useState } from "react"
import { transferToExternalWallet } from "../services/transferExternalWallet"
import { walletId } from "../atoms/walletId"

export default function ExistingAccountPage() {

    const [existingAccount] = useAtom(existingAccountAtom)
    const [amount, setAmount] = useState("")
    const [address, setAddress] = useState("")
    const [walletIdParsed] = useAtom(walletId)

    async function handleSend(targetAddress: string, amount:string) {
        const convertedAmount = Number(amount)
        await transferToExternalWallet(walletIdParsed, targetAddress, convertedAmount)
        return
    }

    return (
        <div className={`${existingAccount ? "flex flex-col w-full sm:w-[400px] h-auto sm:h-[250px] gap-4 rounded-2xl bg-gradient-to-br from-zinc-950 to-zinc-900 p-6 text-left shadow-xl" : "hidden"}`}>
            <h2>Send your money to another wallet?</h2>
            <input className="w-full rounded-2xl bg-zinc-800 p-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300" placeholder="Target address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <input
                className="w-full rounded-2xl bg-zinc-800 p-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                placeholder="Enter deposit amount $"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button className="w-full bg-zinc-200 text-zinc-800 font-medium py-3 rounded-xl transition-colors duration-300" onClick={() => handleSend(address, amount)}>
                Proceed
            </button>
            <div className="text-md text-zinc-400"></div>
        </div>
    )
}