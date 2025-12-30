import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});


const PropertyLeft = () => {
  return (
    <div className="w-[901px] h-auto">

      {/* IMAGE SECTION */}
      <div className="relative h-[384px] rounded-xl overflow-hidden">
        <Image
          src="/roomimg.png"
          alt="Property"
          fill
          className="object-cover"
          priority
        />

        {/* Badges */}
        <div className="absolute flex justify-between top-4 left-4 right-4 gap-2">
          {/* Left Badges */}
          <div className="flex gap-2">
            <span className={`flex items-center h-[27px] gap-1 bg-[#21C45D] ${poppins.className} text-white text-[12px] font-bold px-3 py-1.5 rounded-full`}>
              <Image src="/verified_logo.png" alt="verified" width={14} height={14} />
              Verified
            </span>
            <span className={`flex items-center  h-[27px]  ${poppins.className} bg-[#1A4A99] text-white text-[12px] font-bold px-3 py-1.5 rounded-full`}>
              Semi-Furnished
            </span>
          </div>

          {/* Right Actions */}
          <div className="flex gap-2">
            <div className="cursor-pointer transition-transform duration-200 hover:scale-110 ">
              <Image src="/like.png" width={40} height={40} alt="like" />
            </div>
            <div className="cursor-pointer transition-transform duration-200 hover:scale-110 ">
              <Image src="/share.png" width={40} height={40} alt="share" />
            </div>
          </div>

        </div>


        {/* Image Buttons */}
        <div className={`absolute bottom-4 left-4 flex ${poppins.className} gap-2`}>
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

      {/* DETAILS SECTION */}
      <div className="bg-white  rounded-xl mt-4">

        {/* Title + Rating */}
        <div className={`flex justify-between items-start mt-6 ${poppins.className}`}>
          <div>
            <h1 className={`text-[30px] ${poppins.className} font-bold text-[#0F1729]`}>
              Modern 2BHK in Andheri West
            </h1>

            <div className={`flex items-center gap-2  text-[#6B7280] mt-1 text-[16px]`}>
              <Image src="/location.png" alt="location" width={16} height={16} /> Andheri West, Near DN Nagar Metro
            </div>
          </div>

          <div className="flex items-center gap-1 bg-[#E7B00833] px-3 py-1 rounded-full text-sm">
            <Image src="/start_rating.png" alt="star" width={20} height={20} />
            <span className={`font-bold text-[16px]  ${poppins.className} text-[#0F1729] `}>4.5</span>
            <span className={` ${poppins.className} font-normal text-[16px] text-[#6B7280]`}>(23)</span>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-4 gap-4 mt-6">
          {[
            { label: "Type", value: "2BHK", icon: "/bed2.png" },
            { label: "Floor", value: "5th of 12", icon: "/floor.png" },
            { label: "Available", value: "1 Feb", icon: "/calendar1.png" },
            { label: "Status", value: "Verified", green: true, icon: "/vl.png" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#F0EEEA] rounded-xl p-4 text-center flex flex-col items-center gap-1"
            >
              {item.icon && (
                <Image src={item.icon} width={24} height={24} alt={item.label} />
              )}
              <p className={`text-[14px] ${poppins.className} text-[#6B7280]`}>{item.label}</p>
              <p
                className={`font-bold mt-1 ${item.green ? "text-green-600" : "text[#0F1729]"} text-[16px]`}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>


        {/* Tabs */}
       <div className="flex items-center gap-3 bg-[#F4F1ED] h-[40px] rounded-xl p-1 mt-6">
  <button className="flex items-center justify-center bg-white w-[297px] h-full rounded-lg font-medium shadow-sm">
    Overview
  </button>

  <button className="flex items-center justify-center w-[297px] h-full text-gray-600 rounded-lg">
    Amenities
  </button>

  <button className="flex items-center justify-center w-[297px] h-full text-gray-600 rounded-lg">
    Reviews
  </button>
</div>


        {/* About Section */}
        <div className="border border-[#E5E7EB] rounded-xl p-6 mt-6">
          <h2 className={`text-[24px] text-[#0F1729] ${poppins.className} font-bold mb-2`}>
            About this property
          </h2>

          <p className={`text-[#6B7280] text-[16px] ${poppins.className} leading-relaxed`}>
            Spacious 2BHK apartment with modern amenities, located near metro
            station. Well-ventilated rooms with ample natural light.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
            {[
              "No Pets Allowed",
              "Parking Available",
              "Semi-Furnished",
              "Immediate Move-in Ready",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
  <div className="w-5 h-5 flex items-center justify-center">
    <Image
      src="/check2.png"
      alt="check"
      width={16}
      height={16}
    />
  </div>

  <span className={`${poppins.className} font-normal text-[#0F1729] text-[14px] leading-tight`}>
    {item}
  </span>
</div>

            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default PropertyLeft;
