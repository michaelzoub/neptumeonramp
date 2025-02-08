import { motion } from "framer-motion";
import { succesfullySent } from "../atoms/succesfullySent";
import { useAtom } from "jotai";
import { useEffect } from "react";

export default function SuccessMessage() {
    const [sent, setSent] = useAtom(succesfullySent);

    useEffect(() => {
        if (sent) {
            const timer = setTimeout(() => {
                setSent(false);
            }, 1000); 

            return () => clearTimeout(timer);
        }
    }, [sent, setSent]);

    return (
        <motion.div
            className={`${sent ? "flex items-center w-fit h-fit p-2 rounded-xl bg-green-400 border-[1px] border-green-500" : "hidden"}`}
            animate={{
                translateY: 100,
            }}
            initial={{
                translateY: 0,
            }}
            transition={{
                duration: 0.5,
                ease: "easeInOut",
            }}
        >
            <div>Successfully teleported to Web3 wallet.</div>
        </motion.div>
    );
}
