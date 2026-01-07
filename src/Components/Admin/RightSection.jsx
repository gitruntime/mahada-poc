
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});

const RightSection = ({ onApprove }) => {
    return (
        <div>
            <div className={`w-full lg:w-[398px] h-[355px] bg-white rounded-2xl border border-[#E6E6E6] ${poppins.className} p-6 flex flex-col`}>
                <h2 className="text-[20px] font-bold text-[#171717] mb-4">Approval Actions</h2>

                <label className="text-[12px] text-[#737373] mb-2">
                    Mandatory Remarks <span className="text-red-500">*</span>
                </label>

                <textarea
                    placeholder="Reason for approval or rejection (mandatory)"
                    className="w-full h-[140px] bg-[#F5F5F5] rounded-xl px-4 py-3 text-[16px] text-[#7A7A7A] mb-4 resize-none focus:outline-none placeholder-[#7A7A7A]"
                    style={{
                        fontFamily: 'Arial',
                        fontWeight: 400,
                        fontStyle: 'normal', // 'Regular' in CSS is 'normal'
                        fontSize: '14px',
                        lineHeight: '20px',
                        letterSpacing: '0px',
                    }}
                />

                <button
  onClick={onApprove}
  className="w-full h-[52px] bg-[#6B7280] rounded-xl flex text-[14px] items-center justify-center gap-3 mb-2 text-white font-normal 
             hover:bg-[#4B5563] transition-colors duration-200"
>
  <div className="w-8 h-8 flex items-center justify-center">
    <Image src="/checkwhite.png" width={16} height={16} alt="Approve" />
  </div>
  Approve Registration
</button>

<button
  className="w-full h-[52px] border-2 border-[#6F7785] rounded-xl flex items-center text-[14px] justify-center gap-3 mb-4 text-[#6F7785] font-normal
             hover:bg-[#6F7785] hover:text-white transition-colors duration-200"
>
  <div className="w-8 h-8 flex items-center justify-center">
    <Image src="/cancelwhite.png" width={16} height={16} alt="Reject" />
  </div>
  Reject Registration
</button>


                <div className="pt-4 border-t border-[#E6E6E6] text-[14px] text-[#737373]">
                    All actions will be recorded for audit purposes.
                </div>
            </div>

        </div>
    )
}

export default RightSection
