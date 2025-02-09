import { existingAccountAtom } from "../atoms/existingAccount"
import { useAtom } from "jotai"
import { useState } from "react"
import { useEffect } from "react"
import { transferToExternalWallet } from "../services/transferExternalWallet"
import { walletId } from "../atoms/walletId"
import { walletIdBalanceAtom } from "../atoms/walletIdBalance"
import { succesfullySent } from "../atoms/succesfullySent"
import { motion } from "framer-motion"
import { getExistingAccountBalance } from "../services/getExistingAccountBalance"
import { deformatWalletObject } from "../utils/deformatWalletObject"

export default function ExistingAccountPage() {

    const [existingAccount] = useAtom(existingAccountAtom)
    const [amount, setAmount] = useState("")
    const [address, setAddress] = useState("")
    const [walletIdParsed] = useAtom(walletId)
    const [, setSuccess] = useAtom(succesfullySent)
    const [balance, setBalance] = useAtom(walletIdBalanceAtom)

    useEffect(() => {
        async function run() {
            //deformat
            //const deformattedWallet = deformatWalletObject(walletIdParsed)
            //const getBalance = await getExistingAccountBalance(deformattedWallet)
            //setBalance(getBalance)
        }
        run()
    }, [])

    async function handleSend(targetAddress: string, amount:string) {
        const convertedAmount = Number(amount)
        const result = await transferToExternalWallet(walletIdParsed, targetAddress, convertedAmount)
        if (result) {
            setSuccess(true);
        }
        return
    }

    return (
        <motion.div
            className={`${existingAccount ? "flex flex-col w-full sm:w-[400px] h-auto sm:h-[280px] gap-4 rounded-2xl bg-gradient-to-br from-zinc-950 to-zinc-900 p-6 text-left shadow-xl" : "hidden"}`}
            initial={{ y: -500, opacity: 0 }}
            animate={{
                y: existingAccount ? 0 : -500, 
                opacity: existingAccount ? 1 : 0,
            }}  
            transition={{
                y: {
                    duration: 0.7,             
                    ease: "easeInOut",            
                },
                opacity: {
                    duration: 1.5,           
                    ease: "easeInOut",          
                }
            }}
        >
            <h2 className="text-zinc-300 font-semibold">Send your money to another wallet?</h2>
            <div className="text-zinc-400 text-sm mt-[-15px]">You have a current balance of ${balance}.</div>
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
                Transfer
            </button>
            <div className="text-md text-zinc-400"></div>
        </motion.div>
    )
}