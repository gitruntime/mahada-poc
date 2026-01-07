import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import AdminNavbar from '@/Components/Admin/AdminNavbar';
import RightSection from '@/Components/Admin/RightSection';
import Approved from '@/Components/Admin/Approved';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});

const TenantRegApplication = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [isApproved, setIsApproved] = useState(false);
const [remark, setRemark] = useState("");


    const handleApproveClick = () => {
    setIsApproved(true); 
    // Save the approval status of this specific ID to localStorage
    const approvedIds = JSON.parse(localStorage.getItem('approvedTenants') || '[]');
    const APPLICATION_ID = "TNT-REG-2025-009872";
    approvedIds.push(APPLICATION_ID);// Use the actual ID here
    localStorage.setItem('approvedTenants', JSON.stringify(approvedIds));
};

    return (
        <div className="min-h-screen bg-[#F9FAFB] pb-10">
            {/* Logged-in Info Bar */}
            <div className="flex justify-center items-center gap-2 px-3 py-1.5 border border-[#D1D5DC] rounded-md bg-[#F3F4F6] text-[13px] text-gray-700">
                <span className="text-gray-500">Logged in as:</span>
                <div className="px-2 py-0.5 bg-[#FFFFFF] border border-[#D1D5DC] rounded font-semibold text-gray-900">
                    Approving Authority – Mumbai District
                </div>
                <span className="text-gray-500 text-xs">
                    (Actions available are based on assigned role and jurisdiction)
                </span>
            </div>

            {/* Navbar Section */}
            <div className="bg-[linear-gradient(92.79deg,_#202541_-1.58%,_#2B3255_100.69%)] m-4 rounded-[20px]">
                <AdminNavbar activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>

            {/* Back Navigation */}
            <Link
                href="/Admin/TenantReg"
                className={`inline-flex items-center mx-4 gap-2 ${poppins.className} bg-[#F2F2F2] hover:bg-gray-200 transition-all rounded-2xl px-4 py-2 mb-6`}
            >
                <Image src="/lefticon2.png" width={16} height={16} alt="Back Icon" />
                <span className="text-[14px] font-normal text-[#404040]">
                    Back to Tenant Registration Requests
                </span>
            </Link>

            {/* Main Content Area */}
            <div className="flex flex-col mx-[30px] lg:flex-row gap-6">
                {/* Left Section: Application Data */}
                <div className="flex-1 flex flex-col gap-6">
                    <div className="bg-[#FFF8F0] rounded-2xl p-6 border border-[#FEE685]/30 shadow-sm">
                        
                        {/* Header with Dynamic Status */}
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
                            <h2 className={`${poppins.className} text-[18px] font-bold text-[#1C1C1C]`}>
                                Tenant Registration – Application Details
                            </h2>
                            <div className="flex items-center gap-3">
                                {/* Dynamic Status Badge */}
                                <span
                                    className={`flex items-center gap-2 px-3 py-1 rounded-[8px] border text-[12px] ${poppins.className} font-medium transition-all duration-300 ${
                                        isApproved 
                                        ? "bg-[#DFF3EA] text-[#1E8E5A] border-[#9FD9C2]" 
                                        : "bg-white text-[#F97415] border-[#FEE685]"
                                    }`}
                                >
                                    {isApproved ? "Approved" : "Pending Verification"}
                                </span>

                                {/* Hide SLA when approved */}
                                {!isApproved && (
                                    <span className="flex items-center gap-1 text-[14px] text-[#404040]">
                                        <Image src="/clockblackicon.png" width={16} height={16} alt="Clock Icon" /> 
                                        4 days remaining
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Info Snapshots */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Tenant Snapshot Card */}
                            <div className={`bg-[#FCF0E4] rounded-xl ${poppins.className} p-5`}>
                                <h3 className="text-[16px] font-bold text-[#171717] mb-4">Tenant Snapshot</h3>
                                <div className="space-y-3">
                                    {[
                                        { label: 'Tenant Name', value: 'Rahul Mehta' },
                                        { label: 'Application ID', value: 'TNT-REG-2025-009872' },
                                        { label: 'Submitted On', value: '12 Feb 2025, 11:42 AM' },
                                        { label: 'Applied Region', value: 'Mumbai – Andheri East' },
                                        { label: 'Registration Type', value: 'Individual Tenant' },
                                    ].map((item) => (
                                        <div key={item.label}>
                                            <p className="text-[#737373] mb-1 text-[12px]">{item.label}</p>
                                            <p className="font-medium text-[14px] text-[#171717]">{item.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Verification Snapshot Card */}
                            <div className={`bg-[#FCF0E4] rounded-xl ${poppins.className} p-5`}>
                                <h3 className="text-[16px] font-bold text-[#171717] mb-4">Verification Snapshot</h3>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <p className="text-[12px] text-[#404040] font-semibold uppercase tracking-wider">Identity Verification</p>
                                        {['Aadhaar', 'Mobile Number', 'Email Address'].map((label) => (
                                            <div key={label} className="flex justify-between items-center bg-[#FFF7EF] px-3 py-2 rounded-md">
                                                <span className="text-[#525252] text-[14px]">{label}</span>
                                                <span className="flex items-center gap-1 text-[#008236] font-medium text-[14px]">
                                                    <Image src="/check_icon.png" width={14} height={14} alt="Check" />
                                                    Verified
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="space-y-2">
                                        <p className="text-[12px] text-[#404040] font-semibold uppercase tracking-wider">Registration Fee</p>
                                        <div className="flex justify-between items-center bg-[#FFF7EF] px-3 py-2 rounded-md">
                                            <span className="text-[#525252] text-[14px]">Fee Status</span>
                                            <span className="text-[#008236] font-medium text-[14px]">Paid</span>
                                        </div>
                                        <div className="flex justify-between items-center bg-[#FFF7EF] px-3 py-2 rounded-md">
                                            <span className="text-[#525252] text-[14px]">Amount</span>
                                            <span className="text-[#171717] font-medium text-[14px]">₹299</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section: Conditional Logic */}
                <div className="w-full lg:w-[400px]">
                   {isApproved ? (
    <Approved remark={remark} />
) : (
    <RightSection 
        onApprove={handleApproveClick}
        remark={remark}
        setRemark={setRemark}
    />
)}
                </div>
            </div>
        </div>
    );
};

export default TenantRegApplication;