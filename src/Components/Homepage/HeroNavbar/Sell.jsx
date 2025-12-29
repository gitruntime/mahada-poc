import { Poppins } from 'next/font/google';
import React from 'react';

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const Sell = () => {
    const menuData = [
        {
            title: "For Owner",
            items: [
                { label: "Post Property", badge: "FREE" },
                { label: "My Dashboard" }
            ]
        },
        {
            title: "For Agent & Builder",
            items: [
                { label: "My Dashboard" },
                { label: "Developer Lounge" },
                { label: "Sales Enquiry" }
            ]
        },
        {
            title: "Selling Tools",
            items: [
                { label: "Property Valuation" },
                { label: "Find an Agent" },
                { label: "Rates & Trends" }
            ]
        }
    ];

    return (
        <div className={`w-full max-w-[800px] min-h-[272px] rounded-xl bg-white shadow-lg p-6 flex gap-8 ${poppins.className}`}>
            {menuData.map((column, index) => (
                <div key={index} className="flex flex-col gap-2 flex-1">
                    <h3 className="font-medium text-[16px] border-b border-gray-300 pb-2 text-gray-700">
                        {column.title}
                    </h3>
                    <div className="flex flex-col gap-2 mt-2">
                        {column.items.map((item, itemIndex) => (
                            <span
                                key={itemIndex}
                                className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 cursor-pointer transition-colors duration-200"
                            >
                                {item.label}
                                {item.badge && (
                                    <span className="bg-yellow-400 text-black text-[10px] font-semibold px-2 py-0.5 rounded-full">
                                        {item.badge}
                                    </span>
                                )}
                            </span>
                        ))}
                    </div>
                    {index === 0 && (
                        <button
                            className={`
    mt-auto w-[183px] h-[54px] bg-[#028541] text-white 
    ${poppins.className} font-medium px-4 py-2 rounded-[12px] 
    hover:bg-green-700 hover:scale-105 hover:shadow-lg 
    transition duration-300
  `}
                        >
                            List Your Property
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Sell;
