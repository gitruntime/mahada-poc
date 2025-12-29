import { Poppins } from 'next/font/google';
import React from 'react';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const Rent = () => {
  const menuData = [
    {
      title: "Popular Choices",
      items: [
        "Owner Properties",
        "Verified Properties",
        "Furnished Homes",
        "Bachelor Friendly Homes",
        "Immediately Available"
      ]
    },
    {
      title: "Property Types",
      items: [
        "Flat for rent in Mumbai",
        "House for rent in Mumbai",
        "Villa for rent in Mumbai",
        "PG in Mumbai",
        "Office Space in Mumbai",
        "Commercial Space in Mumbai"
      ]
    },
    {
      title: "Budget",
      items: [
        "Under ₹ 10,000",
        "₹ 10,000 - ₹ 15,000",
        "₹ 15,000 - ₹ 25,000",
        "Above ₹ 25,000"
      ]
    },
    {
      title: "Explore",
      items: [
        "Localities",
        "Buy Vs Rent",
        "Find an Agent",
        "Share Requirement",
        "Property Services",
        "Rent Agreement"
      ]
    }
  ];

  return (
    <div className={`w-full text-gray-500 ${poppins.className} max-w-[941px] min-h-[336px] rounded-xl bg-white shadow-lg p-6 flex justify-between`}>
      {menuData.map((column, index) => (
        <div key={index} className="flex flex-col gap-3">
          <h3 className="font-normal text-[18px] border-b border-gray-300 pb-2 text-gray-700">
            {column.title}
          </h3>
          {column.items.map((item, itemIndex) => (
            <span
              key={itemIndex}
              className="text-base text-gray-500 hover:text-gray-800 cursor-pointer transition-colors duration-200"
            >
              {item}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Rent;
