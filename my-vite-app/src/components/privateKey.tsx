import { Check, Copy } from "lucide-react"
import { useState } from "react"

export default function PrivateKey(props: {privateKey: string, styling: string}) {
    const [copied, setCopied] = useState(false)
    
    async function copyToClipboard() {
        try {
            await navigator.clipboard.writeText(props.privateKey)
            setCopied(true)
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <div className={`flex flex-col w-full sm:w-[400px] h-auto sm:h-[250px] gap-4 rounded-2xl bg-gradient-to-br from-zinc-950 to-zinc-900 p-6 text-left shadow-xl ${props.styling}`}>
            <h2 className="text-zinc-200 font-semibold">Make sure to copy the Wallet ID somewhere safe, this will be your access to your funds!</h2>
            <div className="relative flex h-full gap-4">
                <textarea
                className="bg-zinc-800 h-full w-full rounded-xl text-zinc-200 p-4 pr-12 resize-none focus:outline-none focus:ring-2 focus:ring-zinc-700"
                value={props.privateKey}
                readOnly
                ></textarea>
                <button
                onClick={copyToClipboard}
                className="absolute right-3 top-5 p-2 rounded-lg bg-zinc-700 hover:bg-zinc-600 transition-all duration-200 text-zinc-200 my-auto"
                aria-label="Copy to clipboard"
                >
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
            </div>
        </div>
    )
}