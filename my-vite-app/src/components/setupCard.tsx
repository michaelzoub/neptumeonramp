import { CoinbaseLogo } from "../assets/logos"
import { motion } from "framer-motion"
import { useState } from "react"

const cardData = [
    {
        name: "Basic",
        wallet: "Coinbase Wallet",
        logo: <CoinbaseLogo></CoinbaseLogo>
    }
]

export default function SetupCard() {

    const [amount, setAmount] = useState("")

    async function handleOnboard() {

    }

    return (
        <div className="w-fit text-zinc-200 mt-[150px]">
            <div className="flex flex-col">
                {
                    cardData.map((e) => 
                        <motion.div
                        className="flex flex-col w-[400px] h-[250px] gap-4 rounded-2xl bg-gradient-to-br from-zinc-950 to-zinc-900 p-6 text-left shadow-xl"
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
                            <button className="w-full bg-zinc-200 text-zinc-800 font-medium py-3 rounded-xl transition-colors duration-300" onClick={handleOnboard}>
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