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
    <nav
      className="w-full h-[64px] shadow px-4 sm:px-8 lg:px-20 flex justify-between items-center bg-white"
    >
      {/* Logo */}
      <Link href="/" className={`flex items-center gap-2 ${poppins.className}`}>
        <h1 className="text-[20px] sm:text-[24px] font-semibold">
          Mhada <span className="text-orange-500">Estate</span>
        </h1>
      </Link>

      {/* Tabs */}
      <div className="bg-[#F4F2EE] rounded-2xl p-1 flex gap-1 h-[40px] items-center">
        <Tab
          label="Overview"
          tab="overview"
          icon="/overview.png"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <Tab
          label="Properties"
          tab="properties"
          icon="/prop2.png"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <Tab
          label="Users"
          tab="users"
          icon="/user.png"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <Tab
          label="Grievances"
          tab="grievances"
          icon="/grev.png"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
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
        : "text-[#6B7280] hover:bg-white/60 font-medium"
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
