import Image from "next/image";

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
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="flex items-center gap-1 bg-green-500 text-white text-xs font-medium px-3 py-1.5 rounded-full">
            <img
              src="/verified_logo.png"
              alt="verified"
              className="w-3.5 h-3.5"
            />
            Verified
          </span>

          <span className="flex items-center bg-blue-600 text-white text-xs font-medium px-3 py-1.5 rounded-full">
            Semi-Furnished
          </span>
        </div>

        {/* Image Buttons */}
        <div className="absolute bottom-4 left-4 flex gap-2">
          <button className="bg-blue-600 text-white text-sm px-3 py-1 rounded-md">
            Virtual Tour
          </button>
          <button className="bg-blue-600 text-white text-sm px-3 py-1 rounded-md">
            View All Photos
          </button>
        </div>
      </div>

      {/* DETAILS SECTION */}
      <div className="bg-white  rounded-xl mt-4">

        {/* Title + Rating */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Modern 2BHK in Andheri West
            </h1>

            <div className="flex items-center gap-2 text-gray-500 mt-1 text-sm">
              📍 Andheri West, Near DN Nagar Metro
            </div>
          </div>

          <div className="flex items-center gap-1 bg-yellow-100 px-3 py-1 rounded-full text-sm">
            ⭐ <span className="font-semibold">4.5</span>
            <span className="text-gray-500">(23)</span>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-4 gap-4 mt-6">
          {[
            { label: "Type", value: "2BHK" },
            { label: "Floor", value: "5th of 12" },
            { label: "Available", value: "1 Feb" },
            { label: "Status", value: "Verified", green: true },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#F4F1ED] rounded-xl p-4 text-center"
            >
              <p className="text-sm text-gray-500">{item.label}</p>
              <p
                className={`font-semibold mt-1 ${
                  item.green ? "text-green-600" : "text-gray-900"
                }`}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-3 bg-[#F4F1ED] rounded-xl p-2 mt-6">
          <button className="bg-white px-6 py-2 rounded-lg font-medium shadow-sm">
            Overview
          </button>
          <button className="px-6 py-2 text-gray-600">Amenities</button>
          <button className="px-6 py-2 text-gray-600">Reviews</button>
        </div>

        {/* About Section */}
        <div className="border rounded-xl p-6 mt-6">
          <h2 className="text-lg font-semibold mb-2">
            About this property
          </h2>

          <p className="text-gray-600 text-sm leading-relaxed">
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
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-green-100 text-green-600">
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default PropertyLeft;
