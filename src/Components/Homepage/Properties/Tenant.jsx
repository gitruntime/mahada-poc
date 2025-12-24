import React from "react";
import { MessageSquare, ArrowUpRight } from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

// Dummy data
const tenants = [
  { id: "1", name: "Aditya Kumar", date: "1/8/2024", initial: "V" },
  { id: "2", name: "Kiran Roudal", date: "1/8/2024", initial: "V" },
  { id: "3", name: "Dhairyash S...", date: "1/8/2024", initial: "V" },
];

const TenantCard = () => {
  return (
    <div className="w-full max-w-md h-auto  sm:h-[394px] bg-white rounded-[12px] p-4 sm:p-6 md:p-8 shadow-sm border border-gray-100">
      
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h2 className={`text-[18px] font-bold ${poppins.className} text-[#0F1729]`}>
          Active Tenants
        </h2>

        <button className="group flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-gray-900">
          View All
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>

      {/* Tenant List */}
      <div className="space-y-4">
        {tenants.map((tenant) => (
          <div
            key={tenant.id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-4 hover:border-gray-300 hover:shadow-sm transition-all"
          >
            {/* Left */}
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-200 to-orange-300">
                <span className="text-lg font-bold text-orange-600">
                  {tenant.initial}
                </span>
              </div>

              {/* Info */}
              <div>
                <p className={`text-[16px] ${poppins.className} font-medium text-[#0F1729] leading-snug`}>
                  {tenant.name}
                </p>
                <p className="text-[12px] text-[#6B7280] mt-0.5">
                  {tenant.date}
                </p>
              </div>
            </div>

            {/* Message Button */}
            <button
              aria-label="Message tenant"
              className="flex h-[36px] w-[44px] items-center justify-center rounded-xl border-2 border-[#717182] bg-white text-gray-500 hover:border-orange-400 hover:text-orange-600 transition-all self-start sm:self-center"
            >
              <MessageSquare className="h-[16px] w-[16px]" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TenantCard;
