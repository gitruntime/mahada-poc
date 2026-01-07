import React from 'react'
import { useState } from 'react';

import { Poppins, Inter } from "next/font/google";
import Link from 'next/link';
import Image from 'next/image';
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});


import AdminNavbar from '@/Components/Admin/AdminNavbar';
import Footer from '@/Components/Layout/Footer';

const TenantReg = () => {
    const [page, setPage] = useState(1)
    const pageSize = 6
    const totalItems = 2145
    const totalPages = Math.ceil(totalItems / pageSize)

    const [activeTab, setActiveTab] = useState("overview");


    return (
        <div>
            <div class="flex justify-center   items-center gap-2 px-3 py-1.5 border border-[#D1D5DC] rounded-md bg-[#F3F4F6] text-[13px] text-gray-700">

                <span class="text-gray-500">
                    Logged in as:
                </span>

                <div class="px-2 py-0.5 bg-[#FFFFFF] border border-[#D1D5DC] rounded font-semibold text-gray-900">
                    Approving Authority – Mumbai District
                </div>

                <span class="text-gray-500 text-xs">
                    (Actions available are based on assigned role and jurisdiction)
                </span>

            </div>

            <div className="bg-[linear-gradient(92.79deg,_#202541_-1.58%,_#2B3255_100.69%)] m-4  rounded-[20px] ">
                <AdminNavbar activeTab={activeTab} setActiveTab={setActiveTab} />

            </div>


            <Link href="/Admin/admindashboard" className={`flex bg-[#F2F2F2] ml-[40px] rounded-2xl items-center gap-2 cursor-pointer ${poppins.className} px-4 py-2 w-max`}>
                <Image src="/lefticon2.png" width={16} height={16} alt="Back Icon" />
                <h1 className="text-[14px] font-normal text-[#404040]">
                    Back to Tenant Registration Requests
                </h1>
            </Link>

            <div className="w-full bg-white p-4 rounded-md shadow-sm mt-[30px] ">
                {/* Header */}
                <div className="flex mx-[40px] border-b-1 border-[#E5E7EB] items-center justify-between mb-4">
                    <div className="flex flex-col">
                        <h1 className={`text-[24px] ${inter.className} font-medium text-gray-900`}>
                            Tenant Registration Requests
                        </h1>
                        <p className={`text-[14px] mb-[10px] ${inter.className} text-[#4A5565] `}>
                            View and manage tenant registration applications
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className={`flex items-center gap-1 px-4 py-2 ${inter.className} text-[14px] font-medium text-[#364153] bg-white border border-gray-300 rounded-md hover:bg-gray-50`}>
                            <Image src="/blackdownload.png" width={16} height={16} />
                            Export List
                        </button>
                        <button className={`px-4 py-2 text-[14px] ${inter.className} font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600`}>
                            Advanced Filters
                        </button>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-4 border-b border-gray-200 mb-4 pb-3">
                    {/* Active Tab */}
                    <button
                        className={`relative flex items-center gap-2 px-4 py-2 text-[14px] font-medium ${inter.className}
      bg-[#6B7280] text-white rounded-lg`}
                    >
                        Pending Verification
                        <span className="bg-[#FFEDD4] text-[#6B7280] text-xs font-semibold px-2 py-0.5 rounded-full">
                            2,145
                        </span>
                    </button>

                    {/* Inactive Tabs */}
                    <button className="px-4 py-2 text-[14px] font-medium text-gray-500 hover:text-gray-800">
                        Approved
                    </button>

                    <button className="px-4 py-2 text-[14px] font-medium text-gray-500 hover:text-gray-800">
                        Rejected
                    </button>
                </div>

                {/* Filters and Search */}
                <div className="flex flex-wrap justify-between items-center gap-3">

                    {/* Filters */}
                    <div className="flex flex-wrap items-center gap-2">
                        <select className="px-4 py-2 text-[14px] text-[#00000099] border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#F97415]/40 focus:border-[#F97415]">
                            <option>City / Region</option>
                        </select>

                        <select className="px-4 py-2 text-[14px] text-[#00000099] border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#F97415]/40 focus:border-[#F97415]">
                            <option>Date Range</option>
                        </select>

                        <select className="px-4 py-2 text-[14px] text-[#00000099] border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#F97415]/40 focus:border-[#F97415]">
                            <option>SLA Status</option>
                        </select>

                        <select className="px-4 py-2 text-[14px] text-[#00000099] border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#F97415]/40 focus:border-[#F97415]">
                            <option>Assigned Officer</option>
                        </select>
                    </div>

                    {/* Search */}
                    <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md bg-white min-w-[320px]">
                        <Image src="/searchgray.png" width={16} height={16} alt="Search" />
                        <input
                            type="text"
                            placeholder="Search by Application ID or Tenant Name"
                            className="flex-1 text-[14px] text-[#00000099] outline-none bg-transparent"
                        />
                    </div>

                </div>

            </div>

            <div className="w-full bg-[#F9FAFB] p-6">
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">

                    {/* HEADER */}
                    <div className={`grid ${inter.className} grid-cols-[40px_180px_150px_150px_180px_130px_170px_150px_150px_120px]
                  px-6 py-4 text-[12px] font-bold text-gray-500 border-[#E5E7EB] uppercase border-b`}>
                        <div></div>
                        <div>Application ID</div>
                        <div>Tenant Name</div>
                        <div>Mobile Number</div>
                        <div>City / Region</div>
                        <div>Submitted On</div>
                        <div>Status</div>
                        <div>SLA Status</div>
                        <div>Assigned Officer</div>
                        <div>Action</div>
                    </div>

                    {/* ROWS */}
                    {[

                        {
                            id: "TNT-REG-2025-009872",
                            name: "Rahul Mehta",
                            mobile: "+91 9XXXXXX342",
                            city: "Mumbai – Andheri East",
                            date: "12 Feb 2025",
                            status: "Pending Verification",
                            statusStyle: "bg-gray-100 text-gray-600 border-gray-200",
                            sla: "4 days remaining",
                            officer: "MH-VO-021",
                        },
                        {
                            id: "TNT-REG-2025-009901",
                            name: "Ayesha Khan",
                            mobile: "+91 9XXXXXX118",
                            city: "Pune – Hinjewadi",
                            date: "11 Feb 2025",
                            status: "Pending Verification",
                            statusStyle: "bg-gray-100 text-gray-600 border-gray-200",
                            sla: "Overdue",
                            officer: "MH-VO-014",
                            overdue: true,
                        },
                        {
                            id: "TNT-REG-2025-009933",
                            name: "Suresh Patil",
                            mobile: "+91 9XXXXXX782",
                            city: "Nagpur",
                            date: "10 Feb 2025",
                            status: "Rejected",
                            statusStyle: "bg-[#FFF1E8] text-[#F97316] border-[#FFD6BA]",
                            sla: "2 days remaining",
                            officer: "MH-VO-019",
                        },
                        {
                            id: "TNT-REG-2025-009872",
                            name: "Rahul Mehta",
                            mobile: "+91 9XXXXXX342",
                            city: "Mumbai – Andheri East",
                            date: "12 Feb 2025",
                            status: "Approved",
                            statusStyle: "bg-[#DFF3EA] text-[#1E8E5A] border-[#9FD9C2]",
                            sla: "4 days remaining",
                            officer: "MH-VO-021",
                        },
                        {
                            id: "TNT-REG-2025-009933",
                            name: "Suresh Patil",
                            mobile: "+91 9XXXXXX782",
                            city: "Nagpur",
                            date: "10 Feb 2025",
                            status: "Rejected",
                            statusStyle: "bg-[#FFF1E8] text-[#F97316] border-[#FFD6BA]",
                            sla: "2 days remaining",
                            officer: "MH-VO-019",
                        },
                        {
                            id: "TNT-REG-2025-009872",
                            name: "Rahul Mehta",
                            mobile: "+91 9XXXXXX342",
                            city: "Mumbai – Andheri East",
                            date: "12 Feb 2025",
                            status: "Pending Verification",
                            statusStyle: "bg-gray-100 text-gray-600 border-gray-200",
                            sla: "4 days remaining",
                            officer: "MH-VO-021",
                        },



                    ].map((row, i) => (
                        <div
                            key={i}
                            className={`grid grid-cols-[40px_180px_150px_150px_180px_130px_170px_150px_150px_120px]
                 px-6 py-4 text-sm items-center ${inter.className} border-b border-[#E5E7EB] last:border-none
                 hover:bg-gray-50 transition`}
                        >
                            {/* Checkbox */}
                            <div className="flex items-center justify-center">
                                <input
                                    type="checkbox"
                                    className="
      w-4 h-4
      rounded
      border-gray-300
      text-[#F97316]
      focus:ring-[#F97316]
      cursor-pointer
    "
                                />
                            </div>


                            <div className="text-gray-800 font-medium">{row.id}</div>
                            <div className="text-gray-700">{row.name}</div>
                            <div className="text-gray-600">{row.mobile}</div>
                            <div className="text-gray-700">{row.city}</div>
                            <div className="text-gray-500">{row.date}</div>

                            {/* Status */}
                            <div>
                                <span
                                    className={`flex items-center justify-center
                w-[160px] h-[52px]
                text-xs font-medium
                rounded-[4px] border
                ${row.statusStyle}`}
                                >
                                    {row.status}
                                </span>
                            </div>


                            {/* SLA */}
                            <div className={row.overdue ? "text-red-500 font-medium" : "text-gray-500"}>
                                {row.sla}
                            </div>

                            <div className="text-gray-700">{row.officer}</div>

                            {/* Action */}
                            <div>
                                {row.status === "Pending Verification" ? (
                                    <Link
                                        href="/Admin/TenantRegApplication"
                                        className="text-[#F97316] font-medium cursor-pointer hover:underline"
                                    >
                                        View Details
                                    </Link>
                                ) : (
                                    <span className="text-[#F97316] font-medium cursor-pointer ">
                                        View Details
                                    </span>
                                )}
                            </div>

                        </div>
                    ))}
                </div>


                {/* FOOTER */}
                {/* FOOTER */}
                <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                    {/* Showing text */}
                    <div>
                        Showing {(page - 1) * pageSize + 1}–
                        {Math.min(page * pageSize, totalItems)} of {totalItems} requests
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center gap-2">
                        {/* Previous */}
                        <button
                            disabled={page === 1}
                            onClick={() => setPage(page - 1)}
                            className={`px-3 py-1 border rounded 
                ${page === 1
                                    ? "cursor-not-allowed opacity-50"
                                    : "hover:bg-gray-100"}`}
                        >
                            Previous
                        </button>

                        {/* Page numbers */}
                        {[...Array(totalPages)].slice(0, 3).map((_, i) => {
                            const pageNumber = i + 1
                            return (
                                <button
                                    key={pageNumber}
                                    onClick={() => setPage(pageNumber)}
                                    className={`px-3 py-1 rounded border 
                        ${page === pageNumber
                                            ? "bg-[#F97316] text-white border-[#F97316]"
                                            : "hover:bg-gray-100"}`}
                                >
                                    {pageNumber}
                                </button>
                            )
                        })}

                        {/* Next */}
                        <button
                            disabled={page === totalPages}
                            onClick={() => setPage(page + 1)}
                            className={`px-3 py-1 border rounded 
                ${page === totalPages
                                    ? "cursor-not-allowed opacity-50"
                                    : "hover:bg-gray-100"}`}
                        >
                            Next
                        </button>
                    </div>
                </div>

            </div>

            <Footer />








        </div>
    )
}

export default TenantReg
