import React from "react";
import { ArrowUpRight, MoreVertical } from "lucide-react";
import { Button } from "@/Components/ui/button";

import { Poppins } from "next/font/google";
import Applications from "../Homepage/Properties/Applications";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const properties = [
  {
    id: 1,
    title: "Modern 2BHK in Andheri West",
    location: "Andheri West, Near DN Nagar Metro",
    price: "₹35,000/mo",
    status: "Active",
    imageUrl: "/myprop.png",
  },
  {
    id: 2,
    title: "Cozy 1BHK in Koregaon Park",
    location: "Koregaon Park, Lane 7",
    price: "₹18,000/mo",
    status: "Active",
    imageUrl: "/myprop.png",
  },
  {
    id: 3,
    title: "Spacious 3BHK in Baner",
    location: "Baner, Near Symbiosis College",
    price: "₹45,000/mo",
    status: "Active",
    imageUrl: "/myprop.png",
  }
];

const PropertyCard = ({ title, location, price, status, imageUrl }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 bg-[#F0EEEA] rounded-[12px] hover:shadow-md transition-all">
      
      {/* Image */}
      <img
        src={imageUrl}
        alt={title}
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover shrink-0"
      />

      {/* Details */}
      <div className="flex-1 min-w-0">
        <h3 className={`${poppins.className} font-bold text-[#0F1729] text-base truncate`}>
          {title}
        </h3>
        <p className={`${poppins.className} text-[#6B7280] text-sm truncate`}>
          {location}
        </p>

        <div className="flex flex-wrap items-center gap-3 mt-2">
          <span className={`${poppins.className} px-3 py-1 rounded-full text-[12px] font-bold bg-[#F97415] text-white`}>
            {status}
          </span>
          <span className={`${poppins.className} font-medium text-[#F97415] text-[14px]`}>
            {price}
          </span>
        </div>
      </div>

      {/* Menu */}
      <Button
        variant="ghost"
        size="icon"
        className="self-start sm:self-center text-gray-500 hover:text-gray-900"
      >
        <MoreVertical className="h-5 w-5" />
      </Button>
    </div>
  );
};

const MyProperties = () => {
  return (
    <section className="max-w-[878px] w-full mx-auto px-4 sm:px-6">
      
      {/* My Properties Card */}
      <div className="bg-white rounded-2xl mb-[30px] p-4 sm:p-6 md:p-8 shadow-sm border border-[#E5E7EB]">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h2 className={`${poppins.className} text-xl md:text-2xl font-bold text-[#0F1729]`}>
            My Properties
          </h2>

          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm font-medium text-[#0F1729] hover:text-[#F97415]"
          >
            View All
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Property List */}
        <div className="space-y-4">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>

      {/* Applications Section */}
      <Applications />
    </section>
  );
};

export default MyProperties;
