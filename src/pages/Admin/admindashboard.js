import React from 'react'
import { Poppins } from "next/font/google";
import Link from 'next/link';
import Image from 'next/image';
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});
import { useState } from 'react';
const admindashboard = () => {
    const [activeTab, setActiveTab] = useState("overview");

    return (
        <div>
            <nav className="w-full h-[64px] shadow-[0px_3px_14.4px_0px_rgba(0,0,0,0.25)]
                    px-[20px] sm:px-[40px] lg:px-[80px]
                    flex justify-center items-center bg-white">

                <Link href="/" className={`flex justify-center  gap-2 ${poppins.className}`}>
                    <h1 className="relative text-[20px] sm:text-[24px] text-black font-semibold">
                        Mhada <span className="text-orange-500">Estate</span>
                        <span className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-orange-500"></span>
                    </h1>
                </Link>
            </nav>

            <div>
                <div className="w-full">

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


                        <div className='flex gap-3'>
                            <Link href="#" className="h-[48px] px-[20px] border-2 border-[#F97415] rounded-[12px] text-[#F97415]   text-[14px] font-medium flex items-center gap-2 shadow-md w-full sm:w-auto justify-center">
                                <Image src="/export.png" width={16} height={16} alt="plus" />
                                Export Report
                            </Link>
                            <Link href="#" className="h-[48px] px-[20px] border-2 border-[#F97415] rounded-[12px] text-[#F97415]   text-[14px] font-medium flex items-center gap-2 shadow-md w-full sm:w-auto justify-center">
                                <Image src="/filtericon.png" width={16} height={16} alt="plus" />
                                Filters
                            </Link>
                             <Link href="/admincrud" className="h-[48px] px-[20px] border-2 border-[#F97415] rounded-[12px] text-[#F97415]   text-[14px] font-medium flex items-center gap-2 shadow-md w-full sm:w-auto justify-center">
                              
                                Admin Actions
                            </Link>
                            <Link href="/" className="h-[48px] px-[20px] border-2 border-[#ff1313] rounded-[12px] text-[#dc0b0b]   text-[14px] font-medium flex items-center gap-2 shadow-md w-full sm:w-auto justify-center">

                                Logout
                            </Link>
                        </div>


                    </div>

                    {/* STATS */}
                    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-[100px] py-6 sm:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                        {/* CARD 1 */}
                        <div className="w-full h-[136px] bg-white border border-[#E5E7EB] rounded-[12px] p-4 flex flex-col justify-between shadow-sm">
                            <div className="flex justify-between items-start">
                                <div className="w-[40px] h-[40px] bg-[#F0EEEA] rounded-[10px] flex items-center justify-center">
                                    <img src="/1img.png" className="w-5 h-5" />
                                </div>
                                <div className="px-2 py-0.5 text-[12px] font-bold text-green-600 border border-green-200 rounded-full">
                                    +2.5%
                                </div>
                            </div>

                            <div>
                                <p className={`text-[24px] font-bold ${poppins.className}`}>52,847</p>
                                <p className={`text-[14px] text-[#6B7280] ${poppins.className}`}>
                                    Total Properties
                                </p>
                            </div>
                        </div>

                        {/* CARD 2 */}
                        <div className="w-full h-[136px] bg-white border border-[#E5E7EB] rounded-[12px] p-4 flex flex-col justify-between shadow-sm">
                            <div className="flex justify-between items-start">
                                <div className="w-[40px] h-[40px] bg-[#F0EEEA] rounded-[10px] flex items-center justify-center">
                                    <img src="/2img.png" className="w-5 h-5" />
                                </div>
                                <div className="px-2 py-0.5 text-[12px] font-bold text-green-600 border border-green-200 rounded-full">
                                    +5.2%
                                </div>
                            </div>

                            <div>
                                <p className={`text-[24px] font-bold ${poppins.className}`}>1,28,392</p>
                                <p className={`text-[14px] text-[#6B7280] ${poppins.className}`}>
                                    Registered Tenants
                                </p>
                            </div>
                        </div>

                        {/* CARD 3 */}
                        <div className="w-full h-[136px] bg-white border border-[#E5E7EB] rounded-[12px] p-4 flex flex-col justify-between shadow-sm">
                            <div className="flex justify-between items-start">
                                <div className="w-[40px] h-[40px] bg-[#F0EEEA] rounded-[10px] flex items-center justify-center">
                                    <img src="/3img.png" className="w-5 h-5" />
                                </div>
                                <div className="px-2 py-0.5 text-[12px] font-bold text-green-600 border border-green-200 rounded-full">
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
                                <div className="w-[40px] h-[40px] bg-[#F0EEEA] rounded-[10px] flex items-center justify-center">
                                    <img src="/gr.png" className="w-5 h-5" />
                                </div>
                                <div className="px-2 py-0.5 text-[12px] font-bold text-green-600 border border-green-200 rounded-full">
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
                    <div className="space-y-4 max-w-[1440px] mt-[30px] mx-auto h-auto sm:h-[80px] px-4 sm:px-8 md:px-[100px] py-4 sm:py-0 sm:flex-row justify-between sm:items-center gap-4" >

                        {/* Tabs */}
                        <div className="w-fit bg-[#F4F2EE] rounded-2xl p-1 flex gap-1">

                            {/* Overview */}
                            <div
                                onClick={() => setActiveTab("overview")}
                                className={`flex items-center gap-2 px-4 py-2 rounded-xl cursor-pointer transition
        ${activeTab === "overview"
                                        ? "bg-white shadow-sm text-[#0C1421]"
                                        : "text-[#6B7280] hover:bg-white/60"
                                    }`}
                            >

                                <span className="text-sm font-medium">Overview</span>
                            </div>

                            {/* Audits */}
                            <div
                                onClick={() => setActiveTab("audits")}
                                className={`flex items-center gap-2 px-4 py-2 rounded-xl cursor-pointer transition
        ${activeTab === "properties"
                                        ? "bg-white shadow-sm text-[#0C1421]"
                                        : "text-[#6B7280] hover:bg-white/60"
                                    }`}
                            >

                                <span className="text-sm font-medium">Audits Log</span>
                            </div>

                            {/* Users */}
                            <div
                                onClick={() => setActiveTab("users")}
                                className={`flex items-center gap-2 px-4 py-2 rounded-xl cursor-pointer transition
        ${activeTab === "users"
                                        ? "bg-white shadow-sm text-[#0C1421]"
                                        : "text-[#6B7280] hover:bg-white/60"
                                    }`}
                            >

                                <span className="text-sm font-medium">Users</span>
                            </div>

                            {/* Grievances */}
                            <div
                                onClick={() => setActiveTab("grievances")}
                                className={`flex items-center gap-2 px-4 py-2 rounded-xl cursor-pointer transition
        ${activeTab === "grievances"
                                        ? "bg-white shadow-sm text-[#0C1421]"
                                        : "text-[#6B7280] hover:bg-white/60"
                                    }`}
                            >

                                <span className="text-sm font-medium">Property Details</span>
                            </div>

                        </div>

                        {/* Modal / Content Panel */}
                        <div className="bg-white border border-gray-200 rounded-xl w-full p-5 shadow-sm min-h-[140px] transition-all">

                            {activeTab === "overview" && (
                                <div className="flex flex-col md:flex-row gap-6 w-full">

                                    {/* Left Side - Map */}
                                    <div className="md:w-1/2">
                                        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2 mb-4">
                                            <span className="text-orange-500">📍</span>
                                            Property Distribution Map
                                        </h3>

                                        <div className="rounded-xl overflow-hidden w-full">
                                            <Image
                                                src="/map2.png"
                                                width={729}
                                                height={320}
                                                className="w-full h-auto object-cover"
                                                alt="Property Distribution Map"
                                            />
                                            <div className="p-4">
                                                <p className={`text-[18px] ${poppins.className} text-gray-600`}>
                                                    Live property distribution
                                                </p>
                                                <p className={`text-[18px] ${poppins.className} font-bold`}>
                                                    52,847 properties tracked
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Side - By City */}
                                    <div className="md:w-1/2 p-4 bg-white rounded-xl shadow-md">
                                        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2 mb-4">
                                            <span className="text-orange-500">⏱️</span> By City
                                        </h3>

                                        {[
                                            { city: "Mumbai", count: 18420, width: "100%" },
                                            { city: "Pune", count: 12540, width: "68%" },
                                            { city: "Nagpur", count: 6280, width: "34%" },
                                            { city: "Thane", count: 5890, width: "32%" },
                                            { city: "Nashik", count: 4820, width: "26%" },
                                            { city: "Others", count: 4897, width: "27%" },
                                        ].map((item, index) => (
                                            <div className="mb-3" key={index}>
                                                <div className="flex justify-between mb-1">
                                                    <span className="text-gray-700">{item.city}</span>
                                                    <span className="text-gray-900 font-medium">{item.count.toLocaleString()}</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                    <div
                                                        className="bg-orange-500 h-2 rounded-full"
                                                        style={{ width: item.width }}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === "audits" && (
                                <div className="bg-white border border-gray-200 rounded-xl w-full p-5 shadow-sm overflow-x-auto">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Audit Logs</h3>
                                    <div className="flex gap-2 mb-4">
                                        <input
                                            type="text"
                                            placeholder="Custom Date Range"
                                            className="border border-gray-300 rounded-lg px-3 py-2 w-48 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Type text to filter"
                                            className="border border-gray-300 rounded-lg px-3 py-2 w-64 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        />
                                        <button className="ml-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                                            Download CSV
                                        </button>
                                    </div>

                                    <table className="min-w-full border-collapse border border-gray-200">
                                        <thead className="bg-gray-100">
                                            <tr>
                                                <th className="border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-700">Time</th>
                                                <th className="border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-700">Resource Name</th>
                                                <th className="border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-700">Type</th>
                                                <th className="border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-700">Action</th>
                                                <th className="border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-700">Performed by</th>
                                                <th className="border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-700">Parameters</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="hover:bg-gray-50">
                                                <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Jan 2, 2026 09:15:12 AM</td>
                                                <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">User Login</td>
                                                <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Authentication</td>
                                                <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Logged In</td>
                                                <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">pravin.gouda</td>
                                                <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">IP: 192.168.1.12, Browser: Chrome</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50">
                                                <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Jan 2, 2026 09:18:45 AM</td>
                                                <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Property MH-1023</td>
                                                <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Property</td>
                                                <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Rented</td>
                                                <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">pravin.gouda</td>
                                                <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Tenant: Tena Yadav, Duration: 11 months</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50">
                                                <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Jan 2, 2026 09:25:10 AM</td>
                                                <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Agreement MH-1023</td>
                                                <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Legal Document</td>
                                                <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Signed</td>
                                                <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Tendulal Yadav</td>
                                                <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Signed via Digilocker, Agreement ID: AGR-9876</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50">
                                                <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Jan 2, 2026 09:30:55 AM</td>
                                                <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Payment MH-1023</td>
                                                <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Transaction</td>
                                                <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Payment Done</td>
                                                <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Nitin Yadav</td>
                                                <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Amount: ₹12,000, Mode: UPI, TXN ID: TXN56432</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50">
                                                <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Jan 2, 2026 09:35:12 AM</td>
                                                <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Payment Verification</td>
                                                <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Verification</td>
                                                <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Verified</td>
                                                <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">pravin.gouda</td>
                                                <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Payment verified by Admin, Status: Success</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50">
                                                <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Jan 2, 2026 09:45:03 AM</td>
                                                <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Property MH-1023</td>
                                                <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Maintenance</td>
                                                <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Scheduled</td>
                                                <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">pravin.gouda</td>
                                                <td className="border border-gray-200 px-3 py-2 text-sm text-gray-700">Next maintenance date: Feb 2, 2026</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>

                            )}

                            {activeTab === "users" && (
                                <div class="p-4 bg-white rounded-lg shadow-md w-full">
                                    <h3 class="text-lg font-semibold text-gray-900 mb-4">Users</h3>
                                    <p class="text-sm text-gray-600 mb-4">
                                        Manage landlords, tenants, and admin accounts.
                                    </p>

                                    <div class="overflow-x-auto">
                                        <table class="min-w-full border-collapse border border-gray-200">
                                            <thead class="bg-gray-100">
                                                <tr>
                                                    <th class="border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-700">Name</th>
                                                    <th class="border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-700">Role</th>
                                                    <th class="border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-700">Property Name</th>
                                                    <th class="border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-700">Address</th>
                                                    <th class="border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-700">Phone</th>
                                                    <th class="border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-700">Aadhar Verified</th>
                                                    <th class="border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-700">PAN Verified</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="hover:bg-gray-50">
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Pravin Gouda</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Tenant</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Sunrise Apartments</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">123 MG Road, Mumbai</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">9876543210</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-green-600 font-semibold">Yes</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-red-600 font-semibold">No</td>
                                                </tr>
                                                <tr class="hover:bg-gray-50">
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Aniket Yadav</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Landlord</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Ocean View Residency</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">45 Park Street, Delhi</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">9123456780</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-green-600 font-semibold">Yes</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-green-600 font-semibold">Yes</td>
                                                </tr>
                                                <tr class="hover:bg-gray-50">
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Rahul Sharma</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Tenant</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Greenwood Apartments</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">22 Ring Road, Pune</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">9988776655</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-red-600 font-semibold">No</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-green-600 font-semibold">Yes</td>
                                                </tr>
                                                <tr class="hover:bg-gray-50">
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Neha Verma</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Landlord</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Blue Sky Residency</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">11 MG Marg, Jaipur</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">9871122334</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-green-600 font-semibold">Yes</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-red-600 font-semibold">No</td>
                                                </tr>
                                                <tr class="hover:bg-gray-50">
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Siddharth Jain</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Tenant</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Lotus Apartments</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">7 Brigade Road, Bangalore</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">9122334455</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-red-600 font-semibold">No</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-red-600 font-semibold">No</td>
                                                </tr>
                                                <tr class="hover:bg-gray-50">
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Priya Kapoor</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Landlord</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Sunset Villas</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">56 Marine Drive, Mumbai</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">9988223344</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-green-600 font-semibold">Yes</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-green-600 font-semibold">Yes</td>
                                                </tr>
                                                <tr class="hover:bg-gray-50">
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Ankit Mehta</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Tenant</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">River View Flats</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">14 Nehru Street, Kolkata</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">9876654321</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-red-600 font-semibold">No</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-green-600 font-semibold">Yes</td>
                                                </tr>
                                            </tbody>

                                        </table>
                                    </div>
                                </div>

                            )}

                            {activeTab === "grievances" && (
                                <div class="p-4 bg-white rounded-lg shadow-md w-full">
                                    <h3 class="text-lg font-semibold text-gray-900 mb-4">Applications</h3>
                                    <p class="text-sm text-gray-600 mb-4">
                                        Review property applications from tenants (for rent) and landlords (for purchase).
                                    </p>

                                    <div class="overflow-x-auto">
                                        <table class="min-w-full border-collapse border border-gray-200">
                                            <thead class="bg-gray-100">
                                                <tr>
                                                    <th class="border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-700">Application ID</th>
                                                    <th class="border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-700">Applicant Name</th>
                                                    <th class="border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-700">Role</th>
                                                    <th class="border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-700">Property Name</th>
                                                    <th class="border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-700">Address</th>
                                                    <th class="border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-700">Phone</th>
                                                    <th class="border border-gray-200 px-3 py-2 text-left text-sm font-medium text-gray-700">Application Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="hover:bg-gray-50">
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">A001</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Pravin Gouda</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Tenant</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Sunrise Apartments</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">123 MG Road, Mumbai</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">9876543210</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-yellow-600 font-semibold">Pending</td>
                                                </tr>
                                                <tr class="hover:bg-gray-50">
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">A002</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Nitin Yadav</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Landlord</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Ocean View Residency</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">45 Park Street, Delhi</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">9123456780</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-green-600 font-semibold">Approved</td>
                                                </tr>
                                                <tr class="hover:bg-gray-50">
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">A003</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Rahul Sharma</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Tenant</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Greenwood Apartments</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">22 Ring Road, Pune</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">9988776655</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-red-600 font-semibold">Rejected</td>
                                                </tr>
                                                <tr class="hover:bg-gray-50">
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">A004</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Neha Verma</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Landlord</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Blue Sky Residency</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">11 MG Marg, Jaipur</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">9871122334</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-yellow-600 font-semibold">Pending</td>
                                                </tr>
                                                <tr class="hover:bg-gray-50">
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">A005</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Siddharth Jain</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Tenant</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">Lotus Apartments</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">7 Brigade Road, Bangalore</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-gray-700">9122334455</td>
                                                    <td class="border border-gray-200 px-3 py-2 text-sm text-green-600 font-semibold">Approved</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            )}

                        </div>
                        <div class={`p-5 bg-white ${poppins.className} rounded-lg shadow-md w-full `}>

                            <div class="flex items-center gap-2 mb-4">
                                <img class="w-6 h-6" src="/main.png" alt="icon"/>
                                    <h3 class="text-lg font-semibold text-gray-900">Recent Activity</h3>
                            </div>

                            <div class="flex flex-col gap-2">

                                <div class="flex items-center gap-3 bg-green-100 rounded-md p-3">
                                    <img class="w-6 h-6" src="/img11.png" alt="icon"/>
                                        <div class="flex flex-col">
                                            <span class="text-gray-900 font-medium">Property #45892 verified in Mumbai</span>
                                            <span class="text-gray-500 text-sm">2 min ago</span>
                                        </div>
                                </div>

                                <div class="flex items-center gap-3 bg-red-100 rounded-md p-3">
                                    <img class="w-6 h-6" src="/img22.png" alt="icon"/>
                                        <div class="flex flex-col">
                                            <span class="text-gray-900 font-medium">Grievance #1289 escalated to district level</span>
                                            <span class="text-gray-500 text-sm">15 min ago</span>
                                        </div>
                                </div>

                                <div class="flex items-center gap-3 bg-orange-100 rounded-md p-3">
                                    <img class="w-6 h-6" src="/img33.png" alt="icon"/>
                                        <div class="flex flex-col">
                                            <span class="text-gray-900 font-medium">24 new agreements signed today</span>
                                            <span class="text-gray-500 text-sm">1 hour ago</span>
                                        </div>
                                </div>

                                <div class="flex items-center gap-3 bg-blue-100 rounded-md p-3">
                                    <img class="w-6 h-6" src="/img44.png"alt="icon"/>
                                        <div class="flex flex-col">
                                            <span class="text-gray-900 font-medium">156 new tenant registrations</span>
                                            <span class="text-gray-500 text-sm">2 hours ago</span>
                                        </div>
                                </div>

                            </div>
                        </div>




                    </div>




                </div>
            </div>

        </div>
    )
}

export default admindashboard

