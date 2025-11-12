"use client"; 
import { Bell } from 'lucide-react';
import Image from 'next/image';

const TopBar = () => (
  <header className="flex justify-end items-center p-4 bg-white shadow-sm rounded-xl mb-6">
    
    <div className="flex items-center gap-6">
      <Bell className="h-6 w-6 text-gray-500 cursor-pointer hover:text-black" />
      <div className="flex items-center gap-3">
        <Image src="/images/profile.png" alt="User Avatar" width={40} height={40} className="rounded-full"/>
        <div className="text-right">
          <div className="font-semibold text-[var(--black-custom)]">Firmaneki</div>
        </div>
      </div>
    </div>
  </header>
);

export default TopBar;