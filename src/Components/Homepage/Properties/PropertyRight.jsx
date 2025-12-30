import React from "react";

const PropertyRight = () => {
  return (
    <div className="w-[435px] bg-white rounded-2xl border p-6 shadow-sm">

      {/* Price */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-orange-500">
          ₹35,000
          <span className="text-base font-medium text-gray-500">
            /month
          </span>
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Security Deposit: ₹100,000
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-3 mt-6">
        <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-orange-600 transition">
          📄 Apply Now
        </button>

        <button className="w-full border-2 border-orange-500 text-orange-500 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-orange-50 transition">
          📅 Schedule Tour
        </button>

        <button className="w-full text-gray-800 py-2 flex items-center justify-center gap-2 font-medium">
          📞 Contact Landlord
        </button>
      </div>

      {/* Divider */}
      <hr className="my-6" />

      {/* Listed By */}
      <div>
        <p className="text-sm text-gray-500 mb-3">Listed by</p>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-600">
            P
          </div>

          <div>
            <p className="font-semibold">Priya Sharma</p>
            <p className="text-sm text-green-600 flex items-center gap-1">
              ✔ Verified Landlord
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PropertyRight;
