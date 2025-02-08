import { useAtom } from "jotai";
import { existingAccountAtom } from "../atoms/existingAccount";
import { walletId } from "../atoms/walletId";

export default function Header() {

  const [walletIdParsed, setWalletIdParsed] = useAtom(walletId);
  const [, setExistingAccount] = useAtom(existingAccountAtom);

  function existingAccountFunctionality() {
    if (!walletIdParsed) {
      return
    }
    setExistingAccount(true)
  }

  return (
    <header className="top-0 w-[564px] z-50 bg-zinc-">
      <nav className="max-w-[1600px] mx-auto px-1 py-4">
        <div className="flex items-center justify-between">
            <a href="/" className="relative h-14 flex items-center justify-start"> 
                <h2 className="font-medium text-[#00CC96]">Neptume</h2>
            </a>

          <div className="hidden md:flex items-center gap-2">
            <input className="p-2 rounded-xl bg-zinc-200 w-full" placeholder="Have a Wallet ID?" onChange={(e) => setWalletIdParsed(e.target.value)}></input>
            <button className="w-fit rounded-xl p- border-[px] p-1" onClick={() => existingAccountFunctionality}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`w-6 h-6`}
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <button className="md:hidden p-2">
            <svg 
              className="w-6 h-6 text-zinc-500"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}