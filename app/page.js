import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[var(--gray-custom)] text-slate-900">
      {/* Navbar */}
      <header className="bg-white shadow-sm relative">
        <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between relative">
          <div className="flex items-center gap-4">
            <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
            <div className="font-bold text-xl" style={{ fontFamily: "var(--font-poppins)" }}>
              CashBhak
            </div>
          </div>
          <nav className="hidden md:flex gap-4 text-sm font-medium absolute left-1/2 -translate-x-1/2">
            <a className="hover:underline font-normal text-base" style={{ fontFamily: "var(--font-poppins)" }}>Home</a>
            <a className="hover:underline font-normal text-base" style={{ fontFamily: "var(--font-poppins)" }}>Features</a>
            <a className="hover:underline font-normal text-base" style={{ fontFamily: "var(--font-poppins)" }}>About</a>
            <a className="hover:underline font-normal text-base" style={{ fontFamily: "var(--font-poppins)" }}>Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-md font-normal" style={{ fontFamily: "var(--font-poppins)" }}>
              Sign In
            </Link>
            <Link href="/signup">
                <Button className="bg-[var(--primary-custom)] hover:bg-emerald-500 text-white font-normal text-md" style={{ fontFamily: "var(--font-poppins)" }}>
                  Sign Up
                </Button>
            </Link>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="w-full h-[500px] relative flex items-center">
        <img src="/images/hero.png" alt="Sistem Kasir" className="w-full h-full object-cover absolute inset-0 z-0" />
        <div className="absolute inset-0 z-1"></div>
        <div className="relative z-10 max-w-2xl px-8 md:px-16">
          <h1 className="font-bold text-4xl md:text-5xl text-gray-900 leading-tight mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Sistem Kasir Modern Untuk Bisnis Anda
          </h1>
          <p className="text-md text-gray-700 mb-8">
            Kelola penjualan, inventori, dan laporan bisnis dengan mudah menggunakan sistem kasir terpercaya yang telah digunakan ribuan merchant di indonesia.
          </p>
          <div className="flex gap-4">
            <Button className="bg-[var(--primary-custom)] hover:bg-[var(--blue-custom)] text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
              Try Free Trial 30 Days
            </Button>
            <Link href="/login">
              <Button className="bg-[var(--gray-custom)] hover:bg-[var(--primary-custom)] text-gray-800 font-semibold py-3 px-6 rounded-lg transition duration-300">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-bold text-3xl md:text-4xl text-center mb-12" style={{ fontFamily: "var(--font-poppins)" }}>
            Features We Provide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Point Of Sales */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300">
              <Image src="/images/left-landingpage.png" alt="Point Of Sales" width={600} height={400} className="w-full h-52 object-cover" />
              <div className="p-6 flex-1">
                <h3 className="font-semibold text-xl mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
                  Point Of Sales
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Fitur POS (Point of Sales), proses penjualan di toko dapat dikelola dengan lebih cepat dan akurat, sehingga dapat mengurangi kesalahan dalam proses penjualan
                </p>
              </div>
            </div>
            {/* Card 2: Manajemen Stok */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300">
              <Image src="/images/mid-landingpage.png" alt="Manajemen Stok Barang" width={600} height={400} className="w-full h-52 object-cover" />
              <div className="p-6 flex-1">
                <h3 className="font-semibold text-xl mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
                  Manajemen Stok Barang (Inventory)
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Atur dan monitoring pengelolaan stok barang yang tersedia di sistem dan gudang secara akurat
                </p>
              </div>
            </div>
            {/* Card 3: Laporan Usaha */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300">
              <Image src="/images/right-landingpage.png" alt="Laporan Usaha Lengkap" width={600} height={400} className="w-full h-52 object-cover" />
              <div className="p-6 flex-1">
                <h3 className="font-semibold text-xl mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
                  Laporan Usaha Lengkap
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Nikmati akses laporan usaha lengkap dari aplikasi kasir pintar dimana saja dan kapan saja
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Big Text*/}
      <section>
        <div className="bg-[var(--primary-custom)] p-12 shadow-md flex flex-col items-center justify-center text-center">
          <h1 className="font-bold text-3xl mb-3 flex items-center justify-center" style={{color: "var(--light-custom)", fontFamily: "var(--font-poppins)" }}>
            Ready To Improve Your Business?
          </h1> 
          <p className="text-gray-600 text-md leading-relaxed">
            Join thousands of merchants who have trusted KasirPro to manage their business.
          </p>
          <Link href="/signup">
            <Button className="mt-6 bg-[var(--light-custom)] text-[var(--primary-custom)] hover:scale-105 transition-transform duration-300 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300 " style={{ fontFamily: "var(--font-poppins)" }} >
              Register Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Offering Card Section */}
      <section className="py-10 sm:py-14 bg-[var(--gray-custom)] overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-bold text-2xl md:text-3xl text-center mb-8" style={{ fontFamily: "var(--font-poppins)" }}>
            Choose The Best Plan For Your Business
          </h2>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
            {/* Card 1 */}
            <div className="w-full max-w-xs bg-[var(--light-custom)] rounded-xl shadow-lg p-5 hover:scale-105 transition-transform duration-400">
              <div className="text-center">
                <span className="bg-cyan-500 text-[var(--light-custom)] text-xs font-semibold px-3 py-1 rounded-md">3 Months Subscription</span>
                <h3 className="text-2xl font-bold text-gray-900 mt-4" style={{ fontFamily: "var(--font-poppins)" }}>IDR 300.000</h3>
                <p className="text-xs text-gray-500 mt-1">*before tax</p>
              </div>
              <p className="text-gray-600 text-xs mt-4 text-center">
                Three Month Subsciption. For your better use in short time. Get better experience on 6 months subscription
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 text-xs">Customer Service Fast Response</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 text-xs">Add items whatever you want</span>
                </li>
              </ul>
              <button className="w-full text-white font-semibold py-2 px-4 rounded-lg mt-5 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 transition-all duration-200" style={{ fontFamily: "var(--font-poppins)" }}>
                Get Started Now!
              </button>
            </div>
            {/* Card 2 */}
            <div className="w-full max-w-sm bg-gradient-to-b from-teal-400 to-cyan-500 rounded-xl shadow-2xl p-5 text-white relative z-10 lg:scale-105 transition-transform duration-200">
              <div className="text-center">
                <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1    rounded-md">6 Months Subscription</span>
                <h3 className="text-2xl font-bold mt-4" style={{ fontFamily: "var(--font-poppins)" }}>Free For 60 Days</h3>
                <p className="text-xs text-gray-100 mt-2">
                  Get free experience for 60 days, use some benefits that can you get. Next subscription will be paid constantly
                </p>
              </div>
              <ul className="mt-5 space-y-2">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 14.25l-4.243-4.243M10 10l4.243-4.243M10 10L5.757 5.757M10 10l4.243 4.243" />
                  </svg>
                  <span className="text-gray-100 text-xs">Customer Service Fast Response</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 14.25l-4.243-4.243M10 10l4.243-4.243M10 10L5.757 5.757M10 10l4.243 4.243" />
                  </svg>
                  <span className="text-gray-100 text-xs">Add items whatever you want</span>
                </li>
              </ul>
              <button className="w-full text-cyan-600 bg-white font-semibold py-2 px-4 rounded-lg mt-5 hover:bg-gray-100 transition-all duration-200" style={{ fontFamily: "var(--font-poppins)" }}>
                Try Free Now!
              </button>
            </div>
            {/* Card 3 */}
            <div className="w-full max-w-xs bg-white rounded-xl shadow-lg p-5 hover:scale-105 transition-transform duration-200">
              <div className="text-center">
                <span className="bg-cyan-500 text-white text-xs font-semibold px-3 py-1 rounded-md">6 Months Subscription</span>
                <h3 className="text-2xl font-bold text-gray-900 mt-4" style={{ fontFamily: "var(--font-poppins)" }}>IDR 600.000</h3>
                <p className="text-xs text-gray-500 mt-1">*before tax</p>
              </div>
              <p className="text-gray-600 text-xs mt-4 text-center">
                Three Month Subsciption. For your better use in short time. Get better experience on 6 months subscription
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 text-xs">Customer Service Fast Response</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 text-xs">Add items whatever you want</span>
                </li>
              </ul>
              <button className="w-full text-white font-semibold py-2 px-4 rounded-lg mt-5 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 transition-all duration-200" style={{ fontFamily: "var(--font-poppins)" }}>
                Get Started Now!
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

