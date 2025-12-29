import React from 'react'
import { Poppins } from "next/font/google";
import Link from 'next/link';

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const BlankNavbar = () => {
  return (
    <div>
        <nav className="w-full h-[64px] shadow-[0px_3px_14.4px_0px_rgba(0,0,0,0.25)]
                    px-[20px] sm:px-[40px] lg:px-[80px]
                    flex items-center bg-white">

                <Link href="/"  className={`flex items-center gap-2 ${poppins.className}`}>
                    <h1 className="relative text-[20px] sm:text-[24px] text-black font-semibold">
                        Mhada <span className="text-orange-500">Estate</span>
                        <span className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-orange-500"></span>
                    </h1>
                </Link>
            </nav>
      
    </div>
  )
}

export default BlankNavbar
