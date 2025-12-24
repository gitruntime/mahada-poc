import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="w-full h-[80px] bg-gray-100">
      <div className="flex h-full items-center justify-between px-[40px]">

        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/mahada_logo.png"
            width={520}
            height={60}
            alt="Mahada Logo"
            className="mt-[10px] mb-[10px]"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6 mt-[10px]">

          {/* Font Size Controls + Language */}
          <div className="flex items-center justify-between w-[273px] h-[41px]">

            {/* A-, A, A+ */}
            <div className="flex items-center gap-[4px]">
              <div className="w-[24px] h-[25px] border border-[#212529] rounded-[6px] flex items-center justify-center">
                <span className="text-[#212529] text-[11px] leading-[15px]">A-</span>
              </div>

              <div className="w-[33px] h-[25px] bg-[#198754] rounded-[6px] flex items-center justify-center">
                <span className="text-white text-[11px] leading-[15px]">A</span>
              </div>

              <div className="w-[24px] h-[25px] border border-[#212529] rounded-[6px] flex items-center justify-center">
                <span className="text-[#212529] text-[11px] leading-[15px]">A+</span>
              </div>
            </div>

            {/* Language Switch */}
            <div className="flex items-center w-[174px] h-[41px] border border-[#E5E7EB] rounded-full bg-white p-[4px]">
              <div className="flex items-center justify-center w-[71px] h-[29px] bg-[#028541] rounded-full">
                <span className="text-white text-[12px] font-semibold">
                  English
                </span>
              </div>

              <div className="flex items-center justify-center flex-1">
                <span className="text-[#212529] text-[12px] font-semibold">
                  मराठी
                </span>
              </div>
            </div>

          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <Image src="/seal_img.png" width={60} className='mb-[10px]' height={60} alt="Seal" />
            <Image src="/Emblem_of_India 1.png" className='mb-[10px]' width={38} height={60} alt="Ashok Emblem" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar
