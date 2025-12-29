import { Poppins } from 'next/font/google';
import React from 'react';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const PropertyMenuComponent = () => {
  const menuData = [
    {
      title: "Popular Choices",
      items: ["Ready to Move", "Owner Properties", "Budget Homes", "Premium Homes"]
    },
    {
      title: "Property Types",
      items: [
        "Flats in Mumbai",
        "House for sale in Mumbai",
        "Villa in Mumbai",
        "Plot in Mumbai",
        "Office Space in Mumbai",
        "Commercial Space in Mumbai"
      ]
    },
    {
      title: "Budget",
      items: ["Under ₹ 50 Lac", "₹ 50 Lac - ₹ 1 Cr", "₹ 1 Cr - ₹ 1.5 Cr", "Above ₹ 1.5 Cr"]
    },
    {
      title: "Explore",
      items: [
        "Localities in Mumbai",
        "Projects in Mumbai",
        "Find an Agent",
        "Home Interiors in Mumbai"
      ]
    }
  ];

  return (
    <div className={`w-full text-gray-500  text-[18 px] ${poppins.className} max-w-[1025px] min-h-[370px] rounded-xl bg-white shadow-lg p-6 flex justify-between`}>
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

export default PropertyMenuComponent;
