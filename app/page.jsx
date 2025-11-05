import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <main className="w-full bg-[#f3f5f5] text-slate-900 overflow-hidden">
      <header className="bg-white shadow-sm relative">
        <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between relative">
          <div className="flex items-center gap-4">
            <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
            <div
              className="font-bold text-xl"
              style={{ fontFamily: "var(--font-poppins)" }}>
              CashBhak
            </div>
          </div>

          <nav className="hidden md:flex gap-4 text-sm font-medium absolute left-1/2 -translate-x-1/2">
            <a
              className="hover:underline font-normal text-base"
              style={{ fontFamily: "var(--font-poppins)" }}>
              Home
            </a>
            <a
              className="hover:underline font-normal text-base"
              style={{ fontFamily: "var(--font-poppins)" }}>
              Features
            </a>
            <a
              className="hover:underline font-normal text-base"
              style={{ fontFamily: "var(--font-poppins)" }}>
              About
            </a>
            <a
              className="hover:underline font-normal text-base"
              style={{ fontFamily: "var(--font-poppins)" }}>
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              className="text-sm"
              style={{ fontFamily: "var(--font-poppins)" }}>
              Sign In
            </a>
            <Button
              className="bg-emerald-400 hover:bg-emerald-500 text-white"
              style={{ fontFamily: "var(--font-poppins)" }}>
              Sign Up
            </Button>
          </div>
        </div>
      </header>

      <section className="relative w-screen h-[500px] flex items-center justify-start px-10">
        <Image
          src="/images/hero.png"
          alt="Modern POS System"
          fill
          className="object-cover"
        />

        <div className="max-w-xl space-y-4">
          <h1
            className="text-4xl font-bold leading-snug text-slate-900"
            style={{ fontFamily: "var(--font-poppins)" }}>
            Sistem Kasir Modern <br />
            <span className="text-emerald-500">Untuk Bisnis Anda</span>
          </h1>

          <p className="text-slate-700 text-base leading-relaxed">
            Kelola penjualan, inventori, dan laporan bisnis dengan mudah
            menggunakan sistem kasir terpercaya yang telah digunakan ribuan
            merchant di Indonesia.
          </p>

          <div className="flex gap-3 pt-2">
            <Button className="bg-emerald-400 hover:bg-emerald-500 text-white">
              Try Free Trial 30 Days
            </Button>
            <Button
              variant="outline"
              className="border-slate-400 text-slate-700 hover:bg-slate-100">
              Login
            </Button>
          </div>
        </div>
      </section>

      <section className="p-10 flex flex-col justify-center gap-10 flex-wrap">
        <h1 className="text-2xl text-center font-semibold ">
          Features We Provide
        </h1>
        <div className="flex justify-around">
          <div className="w-[400px] bg-white shadow-2xl rounded-2xl">
            <img
              src="/images/left-landingpage.png"
              alt=""
              className="w-[400px]"
            />
            <div className="p-4 flex-col gap-2">
              <h3 className="text-lg font-semibold ">Point Of Sales</h3>
              <p>
                Fitur POS (Point of Sales), proses penjualan di toko dapat
                dikelola dengan lebih cepat dan akurat, sehingga dapat
                mengurangi kesalahan dalam proses penjualan
              </p>
            </div>
          </div>
          <div className="w-[400px] bg-white shadow-2xl rounded-2xl">
            <img
              src="/images/mid-landingpage.png"
              alt=""
              className="w-[400px]"
            />
            <div className="p-4 flex-col gap-2">
              <h3 className="text-lg font-semibold ">
                Manajemen Stok Barang (Inventory)
              </h3>
              <p>
                Nikmati akses laporan usaha lengkap dari aplikasi kasir pintar
                dimana saja dan kapan saja
              </p>
            </div>
          </div>
          <div className="w-[400px] bg-white shadow-2xl rounded-2xl">
            <img
              src="/images/right-landingpage.png"
              alt=""
              className="w-[400px]"
            />
            <div className="p-4 flex-col gap-2">
              <h3 className="text-lg font-semibold ">Laporan Usaha Lengkap</h3>
              <p>
                Nikmati akses laporan usaha lengkap dari aplikasi kasir pintar
                dimana saja dan kapan saja
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center gap-5 h-[400px] bg-[#27C8AD] mt-20 text-center items-center text-white">
        <h1 className="text-2xl font-semibold ">Ready To Improve Your Business?</h1>
        <h4 className="text-lg font-medium">Join thousands of merchants who have trusted KasirPro to manage their business.</h4>
        <a href="" className="bg-white text-[#27C8AD] px-2 py-2 w-fit font-semibold rounded-lg">Register Now</a>
      </section>
    </main>
  );
}
