import React from 'react';
import { Poppins } from "next/font/google";
import Image from 'next/image';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const isImage = (type) =>
  type.startsWith('image/');

const getDocIcon = (type) => {
  if (type.includes('pdf')) return '/pdf-icon.png';
  if (type.includes('word')) return '/doc-icon.png';
  return '/file-icon.png';
};

const PropDoc = ({ docs }) => {
  if (!docs?.length) return null;

  return (
    <div className="px-4 space-y-4">
      <h3 className={`text-[18px] font-normal ${poppins.className}`}>
        Uploaded Documents
      </h3>

      <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 gap-4">
        {docs.map((doc, index) => (
          <div
            key={index}
            className=" p-2 bg-white shadow-sm"
          >
            {/* Preview */}
            {isImage(doc.type) ? (
              <img
                src={doc.preview}
                alt={doc.name}
                className="w-full h-28 object-cover rounded"
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-28 bg-white rounded">
                <Image
                  src="/docicon2.jpg"
                  width={100}
                  height={100}
                  alt="Document Icon"
                />
               
              </div>
            )}

            {/* Filename */}
            <p className="text-xs text-center truncate mt-2">
              {doc.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropDoc;
