import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const AdminNavbar = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="w-full h-[64px] bg-gradient-to-r rounded-2xl from-[#2A3152] to-[#1F2540] shadow px-4 sm:px-8 lg:px-20 flex items-center justify-between">

      {/* LEFT: Logo */}
      <Link href="/" className={`flex items-center gap-2 ${poppins.className}`}>
        <h1 className="relative text-[20px] sm:text-[24px] text-white font-semibold">
          Mhada <span className="text-orange-500">Estate</span>
          <span className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-orange-500"></span>
        </h1>
      </Link>

      {/* RIGHT: Tabs + Icons (Grouped) */}
      <div className="flex items-center gap-6">

        {/* Tabs */}
        <div className="bg-[#191C2D] rounded-2xl p-1 flex gap-1 h-[40px] items-center">
          <Tab label="Overview" tab="overview" icon="/overview.png" activeTab={activeTab} setActiveTab={setActiveTab} />
          <Tab label="Properties" tab="properties" icon="/prop2.png" activeTab={activeTab} setActiveTab={setActiveTab} />
          <Tab label="Users" tab="users" icon="/user.png" activeTab={activeTab} setActiveTab={setActiveTab} />
          <Tab label="Grievances" tab="grievances" icon="/grev.png" activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6">

          <div className="w-[40px] h-[40px] rounded-full border border-white/40 flex items-center justify-center">
            <img src="/searchadmin.png" alt="search" className="opacity-70" />
          </div>

          <div className="w-[40px] h-[40px] rounded-full border border-white/40 flex items-center justify-center">
            <img src="/noti.png" alt="bell" className="opacity-70" />
          </div>

          <div className="w-[40px] h-[40px] rounded-full border border-white overflow-hidden">
            <img src="/dashadmin.png" alt="profile" className="w-full h-full object-cover" />
          </div>
          <div className="flex justify-center">
  <Link
    href="/choose"
    className="w-[80px] h-[30px] flex items-center justify-center bg-red-500 text-white font-medium rounded-full border border-white hover:bg-red-600 transition-colors duration-300"
  >
    Logout
  </Link>
</div>

        </div>
      </div>
    </nav>

  );
};

const Tab = ({ label, tab, icon, activeTab, setActiveTab }) => (
  <div
    onClick={() => setActiveTab(tab)}
    className={`flex items-center gap-2 px-4 py-2 rounded-xl cursor-pointer transition-all duration-200
      ${activeTab === tab
        ? "bg-white shadow text-[#0C1421] font-semibold"
        : "text-[#FFFFFFB2] hover:bg-white/60 font-medium"
      }`}
    style={{ minWidth: "120px", justifyContent: "center" }}
  >
    {icon && (
      <Image src={icon} alt={`${label} icon`} width={16} height={16} />
    )}
    <span className="text-sm">{label}</span>
  </div>
);

export default AdminNavbar;
