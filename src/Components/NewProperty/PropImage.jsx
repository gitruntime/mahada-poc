import React from 'react';

const PropImage = ({ images }) => {
  if (!images.length) return null;

  return (
    <div className="px-4 space-y-3">
      <h3 className="font-semibold text-lg">Uploaded Images</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <img
              src={img.preview}
              alt={img.name}
              className="w-full h-28 object-cover"
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
