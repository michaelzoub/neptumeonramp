import { motion } from "framer-motion"
import { useState } from "react"
import Messages from "./messages"
import { messageAtom } from "../atoms/messages"
import { useAtom } from "jotai"

export default function LlmSection() {

    const [hover, setHover] = useState(false)
    const [expand, setExpand] = useState(false)
    const [,setMessage] = useAtom(messageAtom)
    const [userMessage, setUserMessage] = useState("")

    function handleMessageSend() {
        setMessage(userMessage)
    }

    return (
        <motion.div className="w-[400px] h-[150px] bg-zinc-900 rounded-xl h-fit p-2 text-zinc-400 cursor-default"
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
            <motion.div className="flex flex-row justify-between p-1 items-center h-fit"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={() => setExpand((e) => !e)}
                whileTap={{scale: 1.01}}
            >
                <div>Ask or create an account with our LLM instead</div>
                <motion.div 
                animate={expand ? "expand" : "initial"}
                variants={{
                    initial: { rotate: 0 },
                    expand: { rotate: 90 }
                }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
                >
                <motion.div
                    animate={hover ? (expand ? "" : "hover") : "initial"}
                    variants={{
                    initial: { x: 0 },
                    hover: { x: 4 }
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 10 }}
                >
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5 12H19M19 12L13 6M19 12L13 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    </svg>
                </motion.div>
                </motion.div>

            </motion.div>
            <motion.div
                initial={{ opacity: 0, height: 0 }} 
                animate={{
                    opacity: expand ? 1 : 0, 
                    height: expand ? "auto" : 0, 
                  }}
                transition={{ duration: 0.2 }} 
            >
                <Messages color="" secondary="" />
                <div className="flex flex-row gap-1">
                    <input className="grow p-2 bg-zinc-800 w-full rounded-2xl" placeholder="Send msg" onChange={(e) => setUserMessage(e.target.value)}></input>
                    <button className="w-fit p-2 bg-zinc-" onClick={handleMessageSend}>Send</button>
                </div>
            </motion.div>
        </motion.div>
    )
}