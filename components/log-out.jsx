"use client"

import { signOut } from "next-auth/react"
import Image from "next/image"

export default function Logout () {
    return(
        <button className="flex items-center gap-2 p-2 rounded-md w-full text-[var(--light-custom)] bg-[var(--red-custom)] hover:bg-[var(--red-custom)] hover:opacity-50 transition-opacity"
          style={{ fontFamily: "var(--font-poppins)" }} onClick={signOut}>
          <Image src="/images/logout.png" alt="Log Out" width={20} height={20} className="flex-shrink-0" />
          <span className="hidden group-hover:inline font-medium">Log Out</span>
        </button>
        
    )
}