import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const ContentTenantLeft = () => {
    return (
        <div className="w-[901] h-auto">

            {/* IMAGE SECTION */}
            <div className="relative h-[384px] rounded-xl overflow-hidden">
                <Image
                    src="/roomimg.png"
                    alt="Property"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute top-4 left-4 right-4 flex justify-between items-end">


                    {/* Bottom-right buttons */}
                    <div className={`flex w-full justify-between items-center ${poppins.className}`}>
                        {/* Left buttons */}
                        <div className="flex gap-2">
                            <button className="bg-[#21C45D] text-white h-[36px] text-[14px] font-medium px-3 py-1 rounded-full flex items-center gap-2 transition-transform duration-200 hover:bg-[#163973] hover:scale-105">
                                <Image src="/verified_logo.png" alt="virtual tour" width={16} height={16} />
                                Verified
                            </button>
                            <button className="bg-[#1A4A99] text-white h-[36px] text-[14px] font-medium px-3 py-1 rounded-full flex items-center gap-2 transition-transform duration-200 hover:bg-[#163973] hover:scale-105">
                                Semi-Furnished
                            </button>
                        </div>

                        {/* Right share icon */}
                        <div className="cursor-pointer flex transition-transform duration-200 hover:scale-110">
                            <Image src="/like.png" width={40} height={40} alt="share" />     <Image src="/share.png" width={40} height={40} alt="share" />
                        </div>
                    </div>


                </div>


                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">


                    {/* Bottom-right buttons */}
                    <div className={`flex gap-2 ${poppins.className}`}>
                        <button className="bg-[#1A4A99] text-white h-[36px] text-[14px] font-medium px-3 py-1 rounded-[10px] flex items-center gap-2 transition-transform duration-200 hover:bg-[#163973] hover:scale-105">
                            <Image src="/camera.png" alt="virtual tour" width={16} height={16} />
                            Virtual Tour
                        </button>
                        <button className="bg-[#1A4A99] text-white h-[36px] text-[14px] font-medium px-3 py-1 rounded-[10px] flex items-center gap-2 transition-transform duration-200 hover:bg-[#163973] hover:scale-105">
                            <Image src="/eye.png" alt="virtual tour" width={16} height={16} />
                            View All Photos
                        </button>
                    </div>

                </div>
            </div>

            <div>

                <div className="mt-[20px] mb-4">
                    {/* Property Title */}
                    <h2 className={`text-[30px] font-bold text-[#0F1729] ${poppins.className}`}>
                        Modern 2BHK in Andheri West
                    </h2>

                    {/* Location Info */}
                    <div className={`flex items-center ${poppins.className} gap-2 text- mt-2 text-[#6B7280] `}>
                        <Image src="/location.png" width={16} height={16} alt="location" />
                        <span className="text-[16px]">Andheri West, Near DN Nagar Metro</span>
                    </div>
                </div>

            </div>
            {/* Info Cards */}
            <div className="grid grid-cols-4 gap-4">
                {[
                    { label: "Type", value: "2BHK", icon: "/bed2.png" },
                    { label: "Floor", value: "5th of 12", icon: "/floor.png" },
                    { label: "Available", value: "1 Feb", icon: "/calendar1.png" },
                    { label: "Status", value: "Verified", green: true, icon: "/vl.png" },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#F0EEEA] rounded-xl p-4 flex flex-col items-center gap-2"
                    >
                        {item.icon && (
                            <Image
                                src={item.icon}
                                width={28}
                                height={28}
                                alt={item.label}
                                className="object-contain"
                            />
                        )}
                        <p className={`text-[14px] text-[#6B7280] ${poppins.className}`}>
                            {item.label}
                        </p>
                        <p
                            className={`mt-1 text-[16px] font-semibold ${item.green ? "text-green-600" : "text-[#0F1729]"
                                }`}
                        >
                            {item.value}
                        </p>
                    </div>
                ))}
            </div>

            <div className={`p-6 bg-white rounded-lg shadow-md  mx-auto ${poppins.className}`}>
                {/* Tabs */}
                <div className="flex border rounded-2xl p-1 bg-[#F0EEEA]  justify-evenly border-gray-200 mb-4">
                    <button className="px-4 py-2 text-gray-800 w-full bg-[#FBFAF9] rounded-[8px] font-medium  b">
                        Overview
                    </button>
                    <button className="px-4 py-2 text-gray-500 w-full rounded-[8px]  font-medium">
                        Amenities
                    </button>
                    <button className="px-4 py-2 text-gray-500 w-full   rounded-[8px] font-medium">
                        Reviews
                    </button>
                </div>

                {/* About Section */}
                <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                        About this property
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Spacious 2BHK apartment with modern amenities, located near metro station. Well-ventilated rooms with ample natural light.
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="flex items-center gap-2 text-gray-700">
                            <Image  src="/check2.png" width={20} height={20} /> No Pets Allowed
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                            <Image  src="/check2.png" width={20} height={20} />  Parking Available
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                            <Image  src="/check2.png" width={20} height={20} />  Semi-Furnished
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                           <Image  src="/check2.png" width={20} height={20} />  Immediate Move-in Ready
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default ContentTenantLeft
