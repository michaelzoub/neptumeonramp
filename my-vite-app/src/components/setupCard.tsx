import { motion } from "framer-motion"
import { useState } from "react"
import { useAtom } from "jotai"
import { extensionAtom } from "../atoms/extension"
import { creationAtom } from "../atoms/creation"
import { cardData } from "../data/cardData"
import { onramp } from "../services/onramp"
import { checkIfUserHasWallet } from "../utils/checkIfUserHasWallet"
import PrivateKey from "./privateKey"

export default function SetupCard() {

    const [amount, setAmount] = useState("")
    const [,setExtension] = useAtom(extensionAtom)
    const [creation, setCreation] = useAtom(creationAtom)
    const [privateKey, setPrivateKey] = useState("")

    async function handleOnboard(wallet: string, extensionLink: string, extension:string, depositAmount: string) {
        const depositAmountParsed = Number(depositAmount)
        if (!depositAmountParsed) {
            console.error("No deposit amount")
            return 
        }
        setExtension(true)
        const ifUserHasWallet = await checkIfUserHasWallet(extension)
        if (!ifUserHasWallet) {
            console.log(extensionLink)
        }
        const result = await onramp(wallet, depositAmountParsed)
        //open onrampUrl:
        setCreation(true)
        console.log(result.onrampUrl)
        window.open(result.onrampUrl, "_blank")
        setPrivateKey(result.privateKey)
        setCreation(false)
        console.log(result)
        //add existingAccount state
    }

    return (
        <div className={`${creation ? "hidden" : "w-fit text-zinc-200"}`}>
            <PrivateKey privateKey={privateKey} styling={`${privateKey ? "visible" : "hidden"}`}></PrivateKey>
            <div className={`${privateKey ? "hidden" : "flex flex-col"}`}>
                {
                    cardData.map((e) => 
                        <motion.div
                        className="flex flex-col w-[290px] sm:w-[400px] h-auto sm:h-[250px] gap-4 rounded-2xl bg-gradient-to-br from-zinc-950 to-zinc-900 p-6 text-left shadow-xl"
                        whileHover={{
                            scale: 1.02,
                            rotateX: 5,
                            rotateY: -5,
                            translateZ: 15,
                            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
                            transition: { duration: 0.3 },
                        }}
                        style={{
                            transformStyle: "preserve-3d",
                            willChange: "transform",
                        }}
                        initial={{ scale: 1, rotateX: 0, rotateY: 0, translateZ: 0 }}
                        >
                        <div className="flex flex-row items-center gap-4">
                            <div className="w-fit text-primary">{e.logo}</div>
                            <div className="w-fit text-3xl font-medium text-zinc-100">{e.name}</div>
                        </div>
                        <h2 className="text-lg text-zinc-400 font-">{e.wallet}</h2>
                        <div className="flex flex-col gap-3 mt-auto">
                            <input
                            className="w-full rounded-2xl bg-zinc-800 p-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                            placeholder="Enter deposit amount $"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            />
                            <button className="w-full bg-zinc-200 text-zinc-800 font-medium py-3 rounded-xl transition-colors duration-300" onClick={() => handleOnboard(e.wallet, e.extensionLink, e.extension, amount)}>
                            Proceed
                            </button>
                        </div>
                        </motion.div>
                    )
                }
            </div>
        </div>
    )
}