"use client";

import { useState } from "react";
import { Arimo, Poppins, Roboto } from "next/font/google";
import Link from "next/link";
import PaymentNavbar1 from "@/Components/Payment/PaymentNavbar1";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

const arimo = Arimo({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const PaymentPage = () => {
  const [paymentDone, setPaymentDone] = useState(false);

  const handlePayment = () => {
    const paymentWindow = window.open(
      "https://payments-test.cashfree.com/forms/mhada-payment",
      "_blank"
    );

    // Detect when user returns to the tab
    const checkFocus = setInterval(() => {
      if (document.hasFocus()) {
        clearInterval(checkFocus);
        setPaymentDone(true);
      }
    }, 500);
  };

  return (
    <div>
      <PaymentNavbar1 />
      <div className="min-h-screen flex flex-col lg:flex-row w-full">

        {/* LEFT */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-6">
          <div className="w-full max-w-[630px] mx-auto">
            <div className="min-h-[620px] px-6 sm:px-[32px] py-[40px] flex flex-col justify-center">

              {/* Header */}
              <div className="mb-6">
                <div className={`flex items-center gap-2 ${poppins.className}`}>
                  <h1 className="text-[#6D727A] text-[28px] font-semibold">
                    MHADA
                  </h1>
                  <h1 className="relative text-black text-[28px] font-semibold">
                    Payment Portal <span className="text-orange-500">Estate</span>
                    <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-orange-500" />
                  </h1>
                </div>
              </div>

              {/* Info box */}
              <div className="bg-white w-full border border-[#E6EDF5] rounded-xl p-4 mb-8">
                <p className={`text-[#717182] ${arimo.className} text-[14px]`}>
                  Make your payment securely through our MHADA Estate portal.
                </p>
              </div>

              {/* Payment Section */}
              <div className="flex flex-col gap-4 mb-10">
                {!paymentDone ? (
                  <button
                    onClick={handlePayment}
                    className="px-6 py-3 rounded-xl border-2 border-[#FF7A18] text-[#F97415] bg-orange-50 hover:bg-orange-100 transition"
                  >
                    Click to Pay
                  </button>
                ) : (
                  <Link href="/paymentsucess">
                    <button
                      className="px-6 py-3 w-full rounded-xl border-2 border-green-600 text-white bg-green-600 hover:bg-green-700 transition"
                    >
                      Next
                    </button>
                  </Link>


                )}
              </div>


            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden lg:flex w-1/2 px-6 pt-10 items-center justify-center">
          <img
            src="/Art.png"
            alt="MHADA Estate"
            className="max-h-[730px] max-w-[640px] object-contain"
          />
        </div>
      </div>

    </div >

  );
};

export default PaymentPage;
