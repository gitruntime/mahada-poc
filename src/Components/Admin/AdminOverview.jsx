import React from 'react'
import { Poppins } from "next/font/google";
import Link from 'next/link';
import Image from 'next/image';
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});
const AdminOverview = () => {
    return (
        <div>
            <>
                {/* HEADER */}
                <div className="max-w-[1440px] mt-[30px] mx-auto h-auto sm:h-[80px] px-4 sm:px-8 md:px-[100px] py-4 sm:py-0 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                    <div>
                        <h1 className={`text-[24px] sm:text-[30px] font-bold ${poppins.className}`}>
                            Admin Dashboard
                        </h1>
                        <p className={`text-[14px] sm:text-[16px] text-[#6B7280] ${poppins.className}`}>
                            Maharashtra State Rental Housing Portal - Control Center
                        </p>
                    </div>

                    <div className="flex gap-3 flex-wrap">
                        <Link href="#" className="h-[48px] px-[20px] border-2 border-[#F97415] rounded-[12px] text-[#F97415] text-[14px] font-medium flex items-center gap-2 shadow-md justify-center">
                            <Image src="/export.png" width={16} height={16} alt="export" />
                            Export Report
                        </Link>

                        <Link href="#" className="h-[48px] px-[20px] border-2 border-[#F97415] rounded-[12px] text-[#F97415] text-[14px] font-medium flex items-center gap-2 shadow-md justify-center">
                            <Image src="/filtericon.png" width={16} height={16} alt="filter" />
                            Filters
                        </Link>

                        <Link href="/admincrud" className="h-[48px] px-[20px] border-2 border-[#F97415] rounded-[12px] text-[#F97415] text-[14px] font-medium flex items-center gap-2 shadow-md justify-center">
                            Admin Actions
                        </Link>

                        <Link href="/" className="h-[48px] px-[20px] border-2 border-[#ff1313] rounded-[12px] text-[#dc0b0b] text-[14px] font-medium flex items-center gap-2 shadow-md justify-center">
                            Logout
                        </Link>
                    </div>
                </div>

                {/* STATS */}
                <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-[100px] py-6 sm:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* CARD 1 */}
                    <div className="w-full h-[136px] bg-white border border-[#E5E7EB] rounded-[12px] p-4 flex flex-col justify-between shadow-sm">
                        <div className="flex justify-between items-start">
                            <div className="w-[40px] h-[40px] bg-[#F974151A] rounded-[10px] flex items-center justify-center">
                                <img src="/1img.png" className="w-5 h-5" />
                            </div>
                            <div className="px-4 bg-[#F9741533] py-1 text-[12px] font-bold text-[#F97415] rounded-full">
                                View Request
                            </div>
                        </div>
                        <div>
                            <p className={`text-[24px] font-bold ${poppins.className}`}>52,847</p>
                            <p className={`text-[14px] text-[#6B7280] ${poppins.className}`}>
                                Pending Registrations
                            </p>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="w-full h-[136px] bg-white border border-[#E5E7EB] rounded-[12px] p-4 flex flex-col justify-between shadow-sm">
                        <div className="flex justify-between items-start">
                            <div className="w-[40px] h-[40px] bg-[#21C45D1A] rounded-[10px] flex items-center justify-center">
                                <img src="/adminimg2.png" className="w-5 h-5" />
                            </div>
                            <div className="px-2 py-0.5 bg-[#21C45D1A] text-[12px] font-bold text-[#21C45D] rounded-full">
                                +5.2%
                            </div>
                        </div>
                        <div>
                            <p className={`text-[24px] font-bold ${poppins.className}`}>28,392</p>
                            <p className={`text-[14px] text-[#6B7280] ${poppins.className}`}>
                                Pending Property Listings
                            </p>
                        </div>
                    </div>

                    {/* CARD 3 */}
                    <div className="w-full h-[136px] bg-white border border-[#E5E7EB] rounded-[12px] p-4 flex flex-col justify-between shadow-sm">
                        <div className="flex justify-between items-start">
                            <div className="w-[40px] h-[40px] bg-[#1A4A991A] rounded-[10px] flex items-center justify-center">
                                <img src="/bluedoclogo.png" className="w-5 h-5" />
                            </div>
                            <div className="px-2 py-0.5 bg-[#21C45D1A] text-[12px] font-bold text-[#21C45D] rounded-full">
                                +3.1%
                            </div>
                        </div>
                        <div>
                            <p className={`text-[24px] font-bold ${poppins.className}`}>78,421</p>
                            <p className={`text-[14px] text-[#6B7280] ${poppins.className}`}>
                                Active Agreements
                            </p>
                        </div>
                    </div>

                    {/* CARD 4 */}
                    <div className="w-full h-[136px] bg-white border border-[#F0EEEA] rounded-[12px] p-4 flex flex-col justify-between shadow-sm">
                        <div className="flex justify-between items-start">
                            <div className="w-[40px] h-[40px] bg-[#EF43431A] rounded-[10px] flex items-center justify-center">
                                <img src="/gr.png" className="w-5 h-5" />
                            </div>
                            <div className="px-3 py-0.5 bg-[#EF4343] text-[12px] font-bold text-white rounded-full">
                                -12%
                            </div>
                        </div>
                        <div>
                            <p className={`text-[24px] font-bold ${poppins.className}`}>1,247</p>
                            <p className={`text-[14px] text-[#6B7280] ${poppins.className}`}>
                                Open Grievances
                            </p>
                        </div>
                    </div>
                </div>

                {/* MAP + CITY */}
                <div className="max-w-[1440px] mt-[30px] mx-auto px-4 sm:px-8 md:px-[100px]">
                    <div className="flex flex-col md:flex-row gap-6 w-full">
                        {/* Map */}
                        <div className="md:w-1/2">
                            <h3 className="text-lg font-semibold mb-4">📍 Property Distribution Map</h3>
                            <Image src="/map2.png" width={729} height={320} className="w-full rounded-xl" alt="map" />
                        </div>

                        {/* City */}
                        <div className="md:w-1/2 p-4 bg-white rounded-xl shadow-md">
                            <h3 className="text-lg font-semibold mb-4">⏱️ By City</h3>
                            {[["Mumbai", 18420, "100%"], ["Pune", 12540, "68%"], ["Nagpur", 6280, "34%"]].map(
                                ([city, count, width], i) => (
                                    <div key={i} className="mb-3">
                                        <div className="flex justify-between mb-1">
                                            <span>{city}</span>
                                            <span className="font-medium">{count.toLocaleString()}</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-orange-500 h-2 rounded-full" style={{ width }} />
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </>

        </div>
    )
}

export default AdminOverview
