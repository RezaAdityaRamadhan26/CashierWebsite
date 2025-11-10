"use client";
import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import Image from 'next/image';

// Hook buatan untuk mendapatkan pathname di lingkungan non-Next.js
const usePathname = () => {
  const [pathname, setPathname] = useState('');
  useEffect(() => {
    // Pastikan window ada (client-side)
    if (typeof window !== 'undefined') {
      setPathname(window.location.pathname);
    }
  }, []);
  return pathname;
};

const navItems = [
  { name: 'Dashboard', href: '/profile', icon: '/images/home-icon.png' },
  { name: 'Transaction', href: '/transaction', icon: '/images/transaction-icon.png' },
  { name: 'Items Data', href: '/items', icon: '/images/product-icon.png' },
];
const utilItems = [
  { name: 'Help & Support', href: '/help', icon: '/images/question-icon.png' },
  { name: 'Settings', href: '/settings', icon: '/images/setting-icon.png' },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="relative h-full p-2 pt-4 flex flex-col justify-between shadow-lg w-16 hover:w-56 transition-all duration-300 ease-in-out group"
      style={{ background: "var(--light-custom)" }}>
      <div>
        <div className="flex items-center gap-2 mb-4 pl-1">
          <img src="/images/logo.png" alt="Logo" width={26} height={26} className="flex-shrink-0" />
          <span className="text-lg font-bold hidden group-hover:inline"
            style={{ color: "var(--black-custom)", fontFamily: "var(--font-poppins)" }}>
            CashBhak
          </span>
        </div>
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <a key={item.name} href={item.href} className={`flex items-center gap-2 p-2 rounded-md hover:bg-[var(--gray-custom)] hover:text-[var(--black-custom)]${isActive ? ' bg-[var(--gray-custom)] text-[var(--black-custom)] font-medium' : ' text-[var(--black-custom)]'}`} style={{ fontFamily: "var(--font-poppins)" }}>
                <img src={item.icon} alt={item.name} width={20} height={20} className="flex-shrink-0" />
                <span className="hidden group-hover:inline">{item.name}</span>
              </a>
            );
          })}
        </nav>
        <hr className="my-3" style={{ borderColor: "var(--gray-custom)" }} />
        <nav className="flex flex-col gap-1">
          {utilItems.map((item) => (
            <a key={item.name} href={item.href} className="flex items-center gap-2 p-2 rounded-md hover:bg-[var(--gray-custom)] hover:text-[var(--black-custom)] text-[var(--black-custom)]" style={{ fontFamily: "var(--font-poppins)" }}>
              <img src={item.icon} alt={item.name} width={20} height={20} className="flex-shrink-0" />
              <span className="hidden group-hover:inline">{item.name}</span>
            </a>
          ))}
        </nav>
      </div>
      <div>
        <button className="flex items-center gap-2 p-2 rounded-md w-full text-[var(--light-custom)] bg-[var(--red-custom)] hover:bg-[var(--red-custom)] hover:opacity-50 transition-opacity"
          style={{ fontFamily: "var(--font-poppins)" }}>
          <img src="/images/logout.png" alt="Log Out" width={20} height={20} className="flex-shrink-0" />
A         <span className="hidden group-hover:inline font-medium">Log Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;