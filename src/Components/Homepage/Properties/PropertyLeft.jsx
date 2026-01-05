import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});


const PropertyLeft = () => {
  return (
    <div className="w-[full] h-auto">

      {/* IMAGE SECTION */}
      <div className="relative h-[500px] rounded-xl overflow-hidden">
        <Image
          src="/roomimg.png"
          alt="Property"
          fill
          className="object-cover"
          priority
        />

        {/* Bottom-left logo and bottom-right buttons */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">

          {/* Bottom-left logo */}
          <div>
            <Image src="/dddd.png" width={130} height={36} alt="Logo" />
          </div>

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


    
    </div>
  );
};

export default PropertyLeft;
