import React from 'react';
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});


const PropImage = ({ images }) => {
  if (!images.length) return null;

  return (
    <div className="px-4 space-y-3">
      <h3 className={`font-normal ${poppins.className} text-[18px]`}>Images</h3>

      <div className="grid ml- grid-cols-2 sm:grid-cols-3  md:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden">
            <img
              src={img.preview}
              alt={img.name}
              className="w-[200px] h-[200px] object-cover"
            />
            <p className="text-xs text-center truncate px-1 py-1">
              {img.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropImage;
