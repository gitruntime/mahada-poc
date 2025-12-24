import React from 'react'
import Image from "next/image";
import { Poppins, Montserrat } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "600"],
});

const AdvicePage = () => {
    return (
        <div className="max-w-[1380px] mt-[70px] mx-auto px-[68px]">
            <div className="flex items-start justify-between mb-8">
                <h1 className={`text-[32px] ${poppins.className} font-semibold text-gray-900`}>
                    Advice & Tools
                </h1>
            </div>

            {/* Cards Wrapper */}
            <div
                className="
                    flex flex-wrap
                    w-full lg:w-[1240px]
                    justify-center lg:justify-between
                    mb-[70px] mx-auto
                "
            >
                {/* CARD 1 */}
                <div className={`w-full sm:w-[303px] h-[248px] border border-gray-300 rounded-[10px] bg-white p-6 flex flex-col justify-between ${poppins.className}`}>
                    <Image src="/calc.png" alt="Calculator" width={50} height={66} />
                    <div className={montserrat.className}>
                        <h2 className="text-[18px] font-semibold leading-[24px] text-gray-900 mb-2">
                            EMI Calculator
                        </h2>
                        <p className="text-[14px] text-[#303030]">
                            Know how much you'll have to pay every month on your loan
                        </p>
                    </div>
                    <div className="flex items-center gap-2 text-[14px] cursor-pointer">
                        <span className="text-[#028541] font-semibold">View now</span>
                        <img src="/right_arrow.png" className="w-[12px] h-[12px]" alt="" />
                    </div>
                </div>

                {/* CARD 2 */}
                <div className={`w-full sm:w-[304px] h-[248px] border border-gray-300 rounded-[10px] bg-white p-6 flex flex-col justify-between ${poppins.className}`}>
                    <Image src="/homeloan_img.png" alt="Home Loan" width={50} height={66} />
                    <div className={montserrat.className}>
                        <h2 className="text-[18px] font-semibold leading-[24px] text-gray-900 mb-2">
                            Best Home Loan Offers
                        </h2>
                        <p className="text-[14px] text-[#303030]">
                            Get the best bank offers curated just for your profile
                        </p>
                    </div>
                    <div className="flex items-center gap-2 text-[14px] cursor-pointer">
                        <span className="text-[#028541] font-semibold">View now</span>
                        <img src="/right_arrow.png" className="w-[12px] h-[12px]" alt="" />
                    </div>
                </div>

                {/* CARD 3 */}
                <div className={`w-full sm:w-[304px] h-[248px] border border-gray-300 rounded-[10px] bg-white p-6 flex flex-col justify-between ${poppins.className}`}>
                    <Image src="/interior.png" alt="Interiors" width={50} height={66} />
                    <div className={montserrat.className}>
                        <h2 className="text-[18px] font-semibold leading-[24px] text-gray-900 mb-2">
                            Interiors Budget Estimator
                        </h2>
                        <p className="text-[14px] text-[#303030]">
                            Know the cost of getting your full/partial home interiors done
                        </p>
                    </div>
                    <div className="flex items-center gap-2 text-[14px] cursor-pointer">
                        <span className="text-[#028541] font-semibold">View now</span>
                        <img src="/right_arrow.png" className="w-[12px] h-[12px]" alt="" />
                    </div>
                </div>

                {/* CARD 4 */}
                <div className={`w-full sm:w-[304px] h-[248px] border border-gray-300 rounded-[10px] bg-white p-6 flex flex-col justify-between ${poppins.className}`}>
                    <Image src="/rates.png" alt="Rates" width={50} height={66} />
                    <div className={montserrat.className}>
                        <h2 className="text-[18px] font-semibold leading-[24px] text-gray-900 mb-2">
                            Rates & Trends
                        </h2>
                        <p className="text-[14px] text-[#303030]">
                            Know all about Property Rates & Trends in your city
                        </p>
                    </div>
                    <div className="flex items-center gap-2 text-[14px] cursor-pointer">
                        <span className="text-[#028541] font-semibold">View now</span>
                        <img src="/right_arrow.png" className="w-[12px] h-[12px]" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvicePage;
