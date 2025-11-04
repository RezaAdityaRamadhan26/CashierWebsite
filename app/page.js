import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function LandingPage () {
  return (
    <main className="min-h-screen bg-[#f3f5f5] text-slate-900">
      <header className="bg-white shadow-sm relative">
        <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between relative">

          <div className="flex items-center gap-4">
            <Image src="/images/logo.png" alt="Logo" width={50} height={50}/>
            <div className="font-bold text-xl" style={{fontFamily:"var(--font-poppins)"}}>
              CashBhak
            </div>
          </div>

          <nav className="hidden md:flex gap-4 text-sm font-medium absolute left-1/2 -translate-x-1/2">
            <a className="hover:underline font-normal text-base" style={{fontFamily:"var(--font-poppins)"}}>Home</a>
            <a className="hover:underline font-normal text-base" style={{fontFamily:"var(--font-poppins)"}}>Features</a>
            <a className="hover:underline font-normal text-base" style={{fontFamily:"var(--font-poppins)"}}>About</a>
            <a className="hover:underline font-normal text-base" style={{fontFamily:"var(--font-poppins)"}}>Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a className="text-sm" style={{fontFamily:"var(--font-poppins)"}}>Sign In</a>
            <Button className="bg-emerald-400 hover:bg-emerald-500 text-white" style={{fontFamily:"var(--font-poppins)"}}>Sign Up</Button>
          </div>

        </div>
      </header>
    </main>
  );
}
