import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import AdminNavbar from '@/Components/Admin/AdminNavbar';
import RightSection from '@/Components/Admin/RightSection';
import Approved from '@/Components/Admin/Approved';
import Rejected from '@/Components/Admin/Rejected';
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});

const TenantRegApplication = () => {
    const [activeTab2, setActiveTab2] = useState("personal");
    const [activeTab, setActiveTab] = useState('overview');
    const [isApproved, setIsApproved] = useState(false);
    const [remark, setRemark] = useState("");
    const [isRejected, setIsRejected] = useState(false); // NEW


    const handleApproveClick = () => {
        setIsApproved(true);
        setIsRejected(false); // ensure rejected state is cleared

        const approvedIds = JSON.parse(localStorage.getItem('approvedTenants') || '[]');
        const APPLICATION_ID = "TNT-REG-2025-009872";
        if (!approvedIds.includes(APPLICATION_ID)) approvedIds.push(APPLICATION_ID);
        localStorage.setItem('approvedTenants', JSON.stringify(approvedIds));
    };

    const handleRejectClick = () => {
        setIsRejected(true);
        setIsApproved(false); // safety

        const rejectedIds = JSON.parse(localStorage.getItem('rejectedTenants') || '[]');
        const APPLICATION_ID = "TNT-REG-2025-009872";

        if (!rejectedIds.includes(APPLICATION_ID)) {
            rejectedIds.push(APPLICATION_ID);
        }

        localStorage.setItem('rejectedTenants', JSON.stringify(rejectedIds));
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
                                    className={`flex items-center gap-2 px-3 py-1 rounded-[8px] border text-[12px] ${poppins.className} font-medium transition-all duration-300
    ${isApproved
                                            ? "bg-[#DFF3EA] text-[#1E8E5A] border-[#9FD9C2]"
                                            : isRejected
                                                ? "bg-[#FEEAEA] text-[#C53030] border-[#F5B5B5]"
                                                : "bg-white text-[#F97415] border-[#FEE685]"
                                        }`}
                                >
                                    {isApproved
                                        ? "Approved"
                                        : isRejected
                                            ? "Rejected"
                                            : "Pending Verification"}
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
                    ) : isRejected ? (
                        <Rejected remark={remark} />
                    ) : (
                        <RightSection
                            onApprove={handleApproveClick}
                            onReject={handleRejectClick}
                            remark={remark}
                            setRemark={setRemark}
                        />
                    )}



                </div>
            </div>
            <div className="flex mt-[30px] bg-[#f8f9fa]  font-sans">
                {/* Main Card */}
                <div className="flex w-full  mx-auto bg-white  shadow-sm border border-gray-200 overflow-hidden">

                    {/* Left Content */}
                    <div className="w-3/4 p-8">

                        {/* Navigation Tabs - Accurate Pill Design */}
                        <div className="flex bg-[#f1f3f5] rounded-xl p-1.5 mb-8">
                            <button
                                onClick={() => setActiveTab2("personal")}
                                className={`flex-1 py-2.5 text-[14px] font-normal ${poppins.className} transition-all duration-200 rounded-[8px] ${activeTab2 === "personal"
                                    ? "bg-[#6B7280] text-white shadow-md"
                                    : "text-gray-500 hover:text-gray-700"
                                    }`}
                            >
                                Personal Information
                            </button>
                            <button
                                onClick={() => setActiveTab2("identity")}
                                className={`flex-1 py-2.5 text-[14px] font-normal ${poppins.className} transition-all duration-200 rounded-lg ${activeTab2 === "identity"
                                    ? "bg-[#6c727f] text-white shadow-md"
                                    : "text-gray-500 hover:text-gray-700"
                                    }`}
                            >
                                Identity Documents
                            </button>
                            <button
                                onClick={() => setActiveTab2("tenant")}
                                className={`flex-1 py-2.5 text-[14px] font-normal ${poppins.className} transition-all duration-200 rounded-lg ${activeTab2 === "tenant"
                                    ? "bg-[#6c727f] text-white shadow-md"
                                    : "text-gray-500 hover:text-gray-700"
                                    }`}
                            >
                                Tenant Profile Details
                            </button>
                        </div>

                        {/* Tab Content */}
                        <div className=" mx-6">
                            {activeTab2 === "personal" && (
                                <div className={`grid grid-cols-1 md:grid-cols-2 ${poppins.className} gap-x-6 gap-y-5`}>
                                    <div className="flex flex-col space-y-1.5">
                                        <label className="text-[12px] text-[#737373] font-normal">Full Name (as per Aadhaar)</label>
                                        <input
                                            type="text"
                                            readOnly
                                            value="Rahul Mehta"
                                            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 bg-[#fcfcfc] text-gray-800 outline-none"
                                        />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <label className="text-[12px] text-[#737373] font-normal">Date of Birth</label>
                                        <input
                                            type="text"
                                            readOnly
                                            value="14 March 1992"
                                            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 bg-[#fcfcfc] text-gray-800 outline-none"
                                        />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <label className="text-[12px] text-[#737373] font-normal">Gender</label>
                                        <input
                                            type="text"
                                            readOnly
                                            value="Male"
                                            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 bg-[#fcfcfc] text-gray-800 outline-none"
                                        />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <label className="text-[12px] text-[#737373] font-normal">Mobile Number</label>
                                        <input
                                            type="text"
                                            readOnly
                                            value="+91 9XXXXXXXXX"
                                            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 bg-[#fcfcfc] text-gray-800 outline-none"
                                        />
                                    </div>
                                    <div className="md:col-span-2 flex flex-col space-y-1.5">
                                        <label className="text-[12px] text-[#737373] font-normal">Email Address</label>
                                        <input
                                            type="text"
                                            readOnly
                                            value="rahul.mehta@email.com"
                                            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 bg-[#fcfcfc] text-gray-800 outline-none"
                                        />
                                    </div>
                                    <div className="md:col-span-2 flex flex-col space-y-1.5">
                                        <label className="text-[12px] text-[#737373] font-normal">Current Address</label>
                                        <textarea
                                            readOnly
                                            rows="3"
                                            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 bg-[#fcfcfc] text-gray-800 outline-none resize-none"
                                            value="Flat No. 402, A-Wing, Andheri East, Mumbai – 400069"
                                        />
                                    </div>
                                </div>
                            )}

                            {activeTab2 === "identity" && (
                                <div className="space-y-4">
                                    {/* Aadhaar Card Document */}
                                    <div className="flex items-center justify-between p-5 bg-white border border-gray-200 rounded-lg shadow-sm">
                                        <div className="flex items-start space-x-4">
                                            {/* Document Icon */}
                                            <div className="p-2 bg-gray-50 rounded-md">
                                                <Image src="/document_icon.png" width={20} height={20} />
                                            </div>

                                            {/* Document Details */}
                                            <div>
                                                <h3 className={`text-[#171717] ${poppins.className} font-normal`}>Aadhaar Card</h3>
                                                <div className="mt-1 flex items-center space-x-2">
                                                    <span className="inline-flex gap-2 items-center px-4 py-1 rounded-[8px] text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                                                        <Image src="/check_icon.png" width={12} height={12} />
                                                        Verified
                                                    </span>
                                                </div>
                                                <div className={`mt-3 text-[12px] text-[#737373] ${poppins.className} space-y-1`}>
                                                    <p>Verified By: Officer ID MH-VO-021</p>
                                                    <p>Verified On: 13 Feb 2025</p>
                                                </div>
                                            </div>
                                        </div>

                                        <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                                            View Document
                                        </button>
                                    </div>

                                    {/* Employment Proof Document */}
                                    <div className="flex items-center justify-between p-5 bg-white border border-gray-200 rounded-lg shadow-sm">
                                        <div className="flex items-start space-x-4">
                                            {/* Document Icon */}
                                            <div className="p-2 bg-gray-50 rounded-md">
                                                <Image src="/document_icon.png" width={20} height={20} />
                                            </div>

                                            {/* Document Details */}
                                            <div>
                                                <h3 className={`text-[#171717] ${poppins.className} font-normal`}>Employment Proof</h3>
                                                <div className="mt-1">
                                                    <span className="inline-flex items-center px-4 py-1 rounded-[8px] text-[12px] font-normal  bg-blue-50 text-blue-700 border border-blue-200">
                                                        Reviewed
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                                            View Document
                                        </button>
                                    </div>
                                </div>
                            )}

                            {activeTab2 === "tenant" && (
                                <div className={`grid grid-cols-1 md:grid-cols-2 ${poppins.className} gap-x-6 gap-y-5`}>
                                    {/* Occupation */}
                                    <div className="space-y-1.5">
                                        <label className="text-[12px] font-normal text-[#737373] ml-0.5">Occupation</label>
                                        <input
                                            type="text"
                                            readOnly
                                            value="Salaried – IT Professional"
                                            className="w-full px-4 py-2.5 bg-[#fcfcfc] border border-[#e5e7eb] rounded-lg text-gray-800 focus:outline-none"
                                        />
                                    </div>

                                    {/* Employer Name */}
                                    <div className="space-y-1.5">
                                        <label className="text-[12px] font-normal text-[#737373] ml-0.5">Employer Name</label>
                                        <input
                                            type="text"
                                            readOnly
                                            value="ABC Technologies Pvt. Ltd."
                                            className="w-full px-4 py-2.5 bg-[#fcfcfc] border border-[#e5e7eb] rounded-lg text-gray-800 focus:outline-none"
                                        />
                                    </div>

                                    {/* Monthly Income Range */}
                                    <div className="space-y-1.5">
                                        <label className="text-[12px] font-normal text-[#737373] ml-0.5">Monthly Income Range</label>
                                        <input
                                            type="text"
                                            readOnly
                                            value="₹40,000 – ₹60,000"
                                            className="w-full px-4 py-2.5 bg-[#fcfcfc] border border-[#e5e7eb] rounded-lg text-gray-800 focus:outline-none"
                                        />
                                    </div>

                                    {/* Intended Duration of Stay */}
                                    <div className="space-y-1.5">
                                        <label className="text-[12px] font-normal text-[#737373] ml-0.5">Intended Duration of Stay</label>
                                        <input
                                            type="text"
                                            readOnly
                                            value="11 Months"
                                            className="w-full px-4 py-2.5 bg-[#fcfcfc] border border-[#e5e7eb] rounded-lg text-gray-800 focus:outline-none"
                                        />
                                    </div>

                                    {/* Preferred Locality - Full Width */}
                                    <div className="md:col-span-2 space-y-1.5">
                                        <label className="text-[12px] font-normal text-[#737373] ml-0.5">Preferred Locality</label>
                                        <input
                                            type="text"
                                            readOnly
                                            value="Andheri East, Mumbai"
                                            className="w-full px-4 py-2.5 bg-[#fcfcfc] border border-[#e5e7eb] rounded-lg text-gray-800 focus:outline-none"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Sidebar - Activity Log */}
                    <div className={`border-l w-[490px] border-[#E5E5E5] ${poppins.className} p-8 bg-[#fcfcfc]`}>
                        <h2 className="text-[#171717] font-bold text-[16px] mb-6">Activity Log</h2>
                        <div>
                            <div class="w-full max-w-xl rounded-lg border border-gray-200 bg-white overflow-hidden">
                                <div class="px-4 py-3 border-b border-gray-200 text-gray-700 text-[15px]">
                                    <span class="text-gray-500">12 Feb 2025</span>
                                    <span class="mx-2">–</span>
                                    <span className='text-[#404040] '>Application submitted</span>
                                </div>

                                <div class="px-4 py-3 border-b border-gray-200 text-gray-700 text-[15px]">
                                    <span class="text-gray-500">13 Feb 2025</span>
                                    <span class="mx-2">–</span>
                                    <span className='text-[#404040] '>Aadhaar verified by MH-VO-021</span>
                                </div>

                                <div class="px-4 py-3 text-gray-700 text-[15px]">
                                    <span class="text-gray-500">14 Feb 2025</span>
                                    <span class="mx-2">–</span>
                                    <span className='text-[#404040] '>Forwarded for approval</span>
                                </div>
                                {isApproved && (
                                    <div className="px-4 py-3 text-gray-700 text-[15px] border-t border-gray-200">
                                        <span className="text-gray-500">14 Feb 2025</span>
                                        <span className="mx-2">–</span>
                                        <span className="text-[#404040]">
                                            Registration approved by AA-Mumbai
                                        </span>
                                    </div>
                                )}
                                 {isRejected && (
                                    <div className="px-4 py-3 text-gray-700 text-[15px] border-t border-gray-200">
                                        <span className="text-gray-500">14 Feb 2025</span>
                                        <span className="mx-2">–</span>
                                        <span className="text-[#404040]">
                                            Registration rejected by AA-Mumbai
                                        </span>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div class="w-full py-2 text-center text-xs bg-gray-50 text-gray-500 border-t border-gray-200">
                All actions are logged with officer ID, timestamp, and system reference as per applicable government audit guidelines.
            </div>





        </div>
    );
};

export default TenantRegApplication;