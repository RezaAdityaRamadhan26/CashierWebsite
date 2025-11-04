import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function LandingPage () {
  return (
    <main className="min-h-screen bg-[#f3f5f5] text-slate-900">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div>
              <Image src="./images/logo.png" alt="Logo" width={100} height={100} />
            </div>
      <nav className="hidden md:flex gap-6 text-sm items-center text-slate-700">
        <a className="hover:underline">Home</a>
          <a className="hover:underline">Features</a>
          <a className="hover:underline">About</a>
        <a className="hover:underline">Contact</a>
      </nav>
  </div>
      <div className="flex items-center gap-3">
        <a className="text-sm">Sign In</a>
          <Button className="bg-emerald-400 hover:bg-emerald-500 text-white">Sign Up</Button>
      </div>
    </div>
  </header>
</main>
)
}