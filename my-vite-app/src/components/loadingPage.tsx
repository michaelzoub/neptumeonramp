import { useAtom } from "jotai"
import { creationAtom } from "../atoms/creation"

export default function LoadingPage() {

    const [creation] = useAtom(creationAtom)

    return (
        <main className={`${creation ? "z-50 w-[400px] h-[250px] mt-[150px] gap-4 rounded-2xl flex items-center justify-center bg-white" : "hidden"}`}>
            <h2>Your funds are teleporting to Web3...</h2>
        </main>
    )
}