import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="top-0 w-[564px] z-50 bg-zinc-">
      <nav className="max-w-[1600px] mx-auto px-1 py-4">
        <div className="flex items-center justify-between">
            <a href="/" className="relative h-14 flex items-center justify-start"> 
                <h2 className="font-medium text-[#00CC96]">Neptume</h2>
            </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-zinc-500 transition-colors">
              Features
            </a>
            <a href="#" className="text-zinc-500 transition-colors">
              Documentation
            </a>
            <a href="#" className="text-zinc-500 transition-colors">
              Community
            </a>
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