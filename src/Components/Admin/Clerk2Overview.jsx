import React from 'react';
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

const Clerk2Overview = () => {
    return (
        <div className={`bg-gray-50 min-h-screen ${poppins.className}`}>
            <div className="max-w-[full] mx-auto px-6 py-8">
                {/* Heading */}
                <h2 className={`text-[20px] font-semibold ${poppins.className} text-[#1B0914] mb-1`}>
                    My Assigned Verification Queue
                </h2>
                <p className={`text-[16px] ${poppins.className} text-[#6B7280] mb-6`}>
                    Applications assigned to you for identity and document verification.
                </p>


                <div className="w-full bg-white rounded-[12px] border border-gray-200 ">
                    {(() => {
                        const [status, setStatus] = React.useState("All");
                        const [sla, setSla] = React.useState("All");
                        const [type, setType] = React.useState("All");
                        const [search, setSearch] = React.useState("");

                        const data = [
                            {
                                id: "TNT-REG-009872",
                                name: "Rahul Mehta",
                                type: "Tenant Registration",
                                city: "Mumbai – Andheri East",
                                date: "12 Feb 2025",
                                sla: "3 days remaining",
                                status: "Pending Verification",
                            },
                            {
                                id: "LLD-REG-001284",
                                name: "Sanjay Kulkarni",
                                type: "Landlord Registration",
                                city: "Pune – Baner",
                                date: "11 Feb 2025",
                                sla: "Overdue",
                                status: "Clarification Requested",
                            },
                            {
                                id: "PROP-002154",
                                name: "Priya Sharma",
                                type: "Property Listing",
                                city: "Mumbai – Powai",
                                date: "13 Feb 2025",
                                sla: "5 days remaining",
                                status: "Pending Verification",
                            },
                            {
                                id: "TNT-REG-009845",
                                name: "Amit Desai",
                                type: "Tenant Registration",
                                city: "Thane – Ghodbunder Road",
                                date: "10 Feb 2025",
                                sla: "Overdue",
                                status: "Pending Verification",
                            },
                            {
                                id: "LLD-REG-001301",
                                name: "Neha Patil",
                                type: "Landlord Registration",
                                city: "Pune – Kothrud",
                                date: "14 Feb 2025",
                                sla: "6 days remaining",
                                status: "Clarification Requested",
                            },
                        ];

                        const filtered = data.filter((item) => {
                            const matchesSearch =
                                item.id.toLowerCase().includes(search.toLowerCase()) ||
                                item.name.toLowerCase().includes(search.toLowerCase());

                            const matchesType = type === "All" || item.type === type;
                            const matchesStatus = status === "All" || item.status === status;
                            const matchesSla =
                                sla === "All" ||
                                (sla === "Overdue" && item.sla === "Overdue") ||
                                (sla === "Within SLA" && item.sla !== "Overdue");

                            return matchesSearch && matchesType && matchesStatus && matchesSla;
                        });

                        return (
                            <>
                                {/* Filters */}
                                <div className={`flex flex-wrap p-5 items-center gap-3 mb-1 ${inter.className}`}>

                                    {/* Status */}
                                    <div className="relative">
                                        <select
                                            onChange={(e) => setStatus(e.target.value)}
                                            className="h-[40px] w-[130px] border border-[#D1D5DC] rounded-[6px] px-4 pr-8 text-[14px]
          appearance-none bg-white focus:outline-none"
                                        >
                                            <option>All Status</option>
                                            <option>Pending Verification</option>
                                            <option>Clarification Requested</option>
                                        </select>

                                        <Image
                                            src="/greydrop.png"
                                            width={14}
                                            height={14}
                                            alt="dropdown"
                                            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                                        />
                                    </div>

                                    {/* SLA */}
                                    <div className="relative">
                                        <select
                                            onChange={(e) => setSla(e.target.value)}
                                            className="h-[40px] w-[150px] border border-[#D1D5DC] rounded-[6px] px-4 pr-8 text-[14px]
          appearance-none bg-white focus:outline-none"
                                        >
                                            <option>All SLA Status</option>
                                            <option>Within SLA</option>
                                            <option>Overdue</option>
                                        </select>

                                        <Image
                                            src="/greydrop.png"
                                            width={14}
                                            height={14}
                                            alt="dropdown"
                                            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                                        />
                                    </div>

                                    {/* Type */}
                                    <div className="relative">
                                        <select
                                            onChange={(e) => setType(e.target.value)}
                                            className="h-[40px] w-[135px] border border-[#D1D5DC] rounded-[6px] px-4 pr-8 text-[14px]
          appearance-none bg-white focus:outline-none"
                                        >
                                            <option>All Types</option>
                                            <option>Tenant Registration</option>
                                            <option>Landlord Registration</option>
                                            <option>Property Listing</option>
                                        </select>

                                        <Image
                                            src="/greydrop.png"
                                            width={14}
                                            height={14}
                                            alt="dropdown"
                                            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                                        />
                                    </div>

                                    {/* Search */}
                                    <div className="ml-auto relative">
                                        <input
                                            type="text"
                                            placeholder="Search by Application ID or Applicant Name"
                                            className="h-[40px] w-[360px] border border-[#E8E8E8] rounded-[8px]
          pl-10 pr-4 text-sm focus:outline-none"
                                            onChange={(e) => setSearch(e.target.value)}
                                        />

                                        <Image
                                            src="/searchgray.png"
                                            width={16}
                                            height={16}
                                            alt="search"
                                            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2"
                                        />
                                    </div>
                                </div>

                                {/* Table */}
                                <div className="overflow-x-auto bg-white  border border-gray-100">
                                    <table className="w-full text-sm">
                                        <thead className="bg-gray-50 border-b border-t border-[#0000001A] ">
                                            <tr className="text-gray-600">
                                                {[
                                                    "Application ID",
                                                    "Applicant Name",
                                                    "Application Type",
                                                    "City / Region",
                                                    "Submitted On",
                                                    "SLA Status",
                                                    "Verification Status",
                                                    "Action",
                                                ].map((head) => (
                                                    <th key={head} className={`text-left px-4 py-4  text-[14px] font-semibold ${inter.className}  text-[#364153]   `}>
                                                        {head}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {filtered.map((item) => (
                                                <tr
                                                    key={item.id}
                                                    className={`border-b border-[#0000001A] ${inter.className} last:border-none hover:bg-gray-50 transition`}
                                                >
                                                    <td className={`px-4 py-4 ${inter.className} font-medium text-[14px] text-[#101828]`}>{item.id}</td>
                                                    <td className={`px-4 text-[#364153] ${inter.className} text-[14px] font-normal `}>{item.name}</td>
                                                    <td className={`px-4 text-[#364153] ${inter.className} text-[14px] font-normal `}>{item.type}</td>
                                                    <td className={`px-4 text-[#364153] ${inter.className} text-[14px] font-normal `}>{item.city}</td>
                                                    <td className={`px-4 text-[#364153] ${inter.className} text-[14px] font-normal `}>{item.date}</td>

                                                    <td
                                                        className={`px-4 font-medium text-[14px]   ${inter.className} ${item.sla === "Overdue" ? "text-[#C10007] font-medium" : "text-gray-700"
                                                            }`}
                                                    >
                                                        {item.sla}
                                                    </td>

                                                    <td className="px-4">
                                                        <span
                                                            className={`inline-flex items-center px-3 py-[3px] text-[12px] font-medium 
    ${inter.className}
    ${item.status === "Pending Verification"
                                                                    ? "bg-gray-100 text-[#364153] border border-[#D1D5DC] rounded-[6px]"
                                                                    : "bg-[#DBEAFE] text-[#14499E] border border-transparent rounded-[6px]"
                                                                }`}
                                                        >
                                                            {item.status}
                                                        </span>
                                                    </td>


                                                    <td className="px-4">
                                                        <Link  href="/Admin/Details2" className="text-[#F54900] font-medium hover:underline cursor-pointer">
                                                            View Details
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </>
                        );

                    })()}
                </div>



            </div>

            <div className="max-w-full mx-auto grid grid-cols-3 gap-6 bg-[#F8F9FB] p-6 rounded-xl">

                {/* LEFT: Clarification Follow-ups */}
                <div className="col-span-2 bg-white rounded-xl border border-gray-200">

                    {/* Header */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                        <h2 className="text-[16px] font-semibold text-[#101828] ">
                            Clarification Follow-ups
                        </h2>
                        <span className="text-sm font-medium text-orange-500 cursor-pointer">
                            View All &gt;
                        </span>
                    </div>
                    {/* Table */}
                    <div className={`${inter.className} overflow-x-auto`}>
                        <table className="w-full text-sm border-collapse">
                            <thead className="border-b border-gray-200 bg-[#F9FAFB]">
                                <tr>
                                    <th className="text-left px-6 py-3 text-[#364153] text-[14px] font-semibold">
                                        Application ID
                                    </th>
                                    <th className="text-left py-3 text-[#364153] text-[14px] font-semibold">
                                        Applicant Name
                                    </th>
                                    <th className="text-left py-3 text-[#364153] text-[14px] font-semibold">
                                        Clarification Sent On
                                    </th>
                                    <th className="text-left py-3 text-[#364153] text-[14px] font-semibold">
                                        Days Awaiting Response
                                    </th>
                                    <th className="text-left py-3 text-[#364153] text-[14px] font-semibold">
                                        Action
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="text-[#475467]">
                                <tr className="border-b border-gray-100 hover:bg-[#F9FAFB] transition">
                                    <td className="px-6 py-4 text-[#101828] font-medium">
                                        LLD-REG-001305
                                    </td>
                                    <td className="py-4">
                                        Vikram Joshi
                                    </td>
                                    <td className="py-4">
                                        08 Feb 2025
                                    </td>
                                    <td className="py-4">
                                        7 days
                                    </td>
                                    <td className="py-4">
                                        <span className="text-orange-500 font-medium cursor-pointer hover:underline">
                                            View Application
                                        </span>
                                    </td>
                                </tr>

                                <tr className="border-b border-gray-100 hover:bg-[#F9FAFB] transition">
                                    <td className="px-6 py-4 text-[#101828] font-medium">
                                        TNT-REG-009798
                                    </td>
                                    <td className="py-4">
                                        Anjali Rane
                                    </td>
                                    <td className="py-4">
                                        09 Feb 2025
                                    </td>
                                    <td className="py-4">
                                        6 days
                                    </td>
                                    <td className="py-4">
                                        <span className="text-orange-500 font-medium cursor-pointer hover:underline">
                                            View Application
                                        </span>
                                    </td>
                                </tr>

                                <tr className="hover:bg-[#F9FAFB] transition">
                                    <td className="px-6 py-4 text-[#101828] font-medium">
                                        PROP-002089
                                    </td>
                                    <td className="py-4">
                                        Suresh Pawar
                                    </td>
                                    <td className="py-4">
                                        11 Feb 2025
                                    </td>
                                    <td className="py-4">
                                        4 days
                                    </td>
                                    <td className="py-4">
                                        <span className="text-orange-500 font-medium cursor-pointer hover:underline">
                                            View Application
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

                {/* RIGHT: Verification Alerts */}
                <div className={`col-span-1 bg-white rounded-xl border border-gray-200`}>

                    {/* Header */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                        <h2 className="text-[16px] font-semibold text-[#101828]">
                            Verification Alerts
                        </h2>
                        <span className="text-sm font-medium text-[#F97316] cursor-pointer flex items-center gap-1">
                            View All <span className="text-lg leading-none">›</span>
                        </span>
                    </div>

                    {/* Alerts */}
                    <div className="divide-y divide-gray-200">

                        {/* Alert 1 */}
                        <div className="flex items-start gap-3 px-6 py-4">
                            <Image
                                src="/orangealert.png"
                                width={16}
                                height={16}
                                alt="alert"
                                className="mt-[3px]"
                            />
                            <span className="text-[#F97316] text-sm leading-5">
                                42 verifications nearing SLA breach
                            </span>
                        </div>

                        {/* Alert 2 */}
                        <div className="flex items-start gap-3 px-6 py-4">
                            <Image
                                src="/redalert.png"
                                width={16}
                                height={16}
                                alt="alert"
                                className="mt-[3px]"
                            />
                            <span className="text-[#EF4444] text-sm leading-5">
                                96 overdue verifications
                            </span>
                        </div>

                        {/* Alert 3 */}
                        <div className="flex items-start gap-3 px-6 py-4">
                            <Image
                                src="/grayalert.png"
                                width={16}
                                height={16}
                                alt="alert"
                                className="mt-[3px]"
                            />
                            <span className="text-[#667085] text-sm leading-5">
                                18 applications missing mandatory documents
                            </span>
                        </div>

                    </div>
                </div>



            </div>
            <div className={`max-w-full mx-6 mb-6   bg-[#FCF0E4] rounded-[8px]  border border-[#E6E6E6] ${inter.className}`}>

                {/* Header */}
                <div className="px-5 py-3 border-b border-[#F2E6D8]">
                    <h3 className="text-[16px] font-semibold text-[#101828]">
                        My Recent Actions
                    </h3>
                </div>

                {/* Row 1 */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-[#F2E6D8]">
                    <p className="text-[14px] text-[#364153]">
                        Verified tenant registration TNT-REG-009841
                    </p>
                    <span className="text-[12px] text-[#6A7282]">
                        20 minutes ago
                    </span>
                </div>

                {/* Row 2 */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-[#F2E6D8]">
                    <p className="text-[14px] text-[#364153]">
                        Requested clarification for LLD-REG-001305
                    </p>
                    <span className="text-[12px] text-[#6A7282]">
                        1 hour ago
                    </span>
                </div>

                {/* Row 3 */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-[#F2E6D8]">
                    <p className="text-[14px] text-[#364153]">
                        Forwarded property listing PROP-002154 for approval
                    </p>
                    <span className="text-[12px] text-[#6A7282]">
                        Today
                    </span>
                </div>

                {/* Row 4 */}
                <div className="flex items-center justify-between px-5 py-3">
                    <p className="text-[14px] text-[#364153]">
                        Verified landlord registration LLD-REG-001298
                    </p>
                    <span className="text-[12px] text-[#6A7282]">
                        Today
                    </span>
                </div>

            </div>








            <div className="flex flex-col lg:flex-row mx-3 gap-6">
                {/* LEFT CARD */}
                <div className="w-full  bg-white rounded-xl border border-gray-200 px-6 py-5">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className={`text-[20px] font-semibold ${poppins.className} text-[#1B0914]`}>
                            System &amp; Approval Activity Log
                        </h2>
                        <span className="text-[13px] text-orange-500 font-medium cursor-pointer">
                            View All →
                        </span>
                    </div>

                    <div className="flex flex-col divide-y divide-gray-100">
                        <div className="flex justify-between items-center py-3">
                            <p className={`text-[14px] ${poppins.className} text-[#364153]`}>
                                Property ID #45892 verified in Mumbai – Verified by Officer MH-VO-021
                            </p>
                            <span className={`text-[12px] ${poppins.className} text-[#6A7282] whitespace-nowrap`}>
                                10 minutes ago
                            </span>
                        </div>

                        <div className="flex justify-between items-center py-3">
                            <p className={`text-[14px] ${poppins.className} text-[#364153]`}>
                                Grievance ID #1289 escalated to District Level
                            </p>
                            <span className={`text-[12px] ${poppins.className} text-[#6A7282] whitespace-nowrap`}>
                                22 minutes ago
                            </span>
                        </div>

                        <div className="flex justify-between items-center py-3">
                            <p className={`text-[14px] ${poppins.className} text-[#364153]`}>
                                24 new rental agreements digitally signed
                            </p>
                            <span className={`text-[12px] ${poppins.className} text-[#6A7282] whitespace-nowrap`}>
                                Last 1 hour
                            </span>
                        </div>

                        <div className="flex justify-between items-center py-3">
                            <p className={`text-[14px] ${poppins.className} text-[#364153]`}>
                                156 new tenant registrations received
                            </p>
                            <span className={`text-[12px] ${poppins.className} text-[#6A7282] whitespace-nowrap`}>
                                Last 2 hours
                            </span>
                        </div>
                    </div>
                </div>

                {/* RIGHT CARD */}
                <div className="w-full lg:max-w-[720px] bg-white rounded-xl border border-gray-200 px-6 py-5">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-[20px] font-semibold text-gray-900">
                            SLA &amp; Exception Alerts
                        </h2>
                        <span className="text-[13px] text-orange-500 font-medium cursor-pointer">
                            View All →
                        </span>
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-red-50 border border-red-100">
                            <div className="w-5 h-5 flex items-center justify-center rounded-full border border-red-500 text-red-500 text-[12px] font-bold">
                                !
                            </div>
                            <p className="text-[14px] text-red-600">
                                214 registrations pending beyond SLA (7 days)
                            </p>
                        </div>

                        <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-yellow-50 border border-yellow-100">
                            <div className="w-5 h-5 flex items-center justify-center rounded-full border border-yellow-500 text-yellow-600 text-[12px] font-bold">
                                !
                            </div>
                            <p className="text-[14px] text-yellow-700">
                                38 property listings awaiting clarification from landlords
                            </p>
                        </div>

                        <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-yellow-50 border border-yellow-100">
                            <div className="w-5 h-5 flex items-center justify-center rounded-full border border-yellow-500 text-yellow-600 text-[12px] font-bold">
                                !
                            </div>
                            <p className="text-[14px] text-yellow-700">
                                12 approvals pending senior authority confirmation
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Clerk2Overview;
