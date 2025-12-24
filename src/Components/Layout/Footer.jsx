import React from 'react';

const Footer = () => {
  return (
    <footer className="font-['Montserrat'] text-white">

      {/* 1️⃣ ABOUT SECTION */}
      <div className="w-full bg-[#383838] py-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3">
            About Mhada Estate
          </h2>
          <p className="text-sm font-light mb-8">
            As the largest platform connecting property buyers and sellers, ...
          </p>

          {/* App + Social */}
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex gap-3">
              <img src="googleplay.png" className="h-[32px]" />
              <img src="appstore1.png" className="h-[32px]" />
            </div>

            <div className="flex gap-2">
              <img src="facebook_logo.png" className="w-[32px] h-[32px]" />
              <img src="x-icon.png" className="w-[32px] h-[32px]" />
              <img src="linkedin-icon.png" className="w-[32px] h-[32px]" />
              <img src="youtube-icon.png" className="w-[32px] h-[32px]" />
              <img src="instagram-icon.png" className="w-[32px] h-[32px]" />
            </div>
          </div>
        </div>
      </div>

      {/* 2️⃣ NAVIGATION LINKS */}
      <div className="w-full bg-[#515151] py-5 border-y border-gray-600 border-dashed">
        <ul className="max-w-7xl mx-auto flex flex-wrap justify-center gap-x-6 gap-y-3 text-[14px] text-white">
          {[
            'Sitemap', 'Terms & Conditions', 'Privacy Policy', 'Whistle Blower Policy',
            'Blog', 'Careers', 'Testimonials', 'Unsubscribe',
            'Help Center', 'Sales Enquiry', 'Buy Services', 'News'
          ].map(link => (
            <li key={link} className="hover:text-white cursor-pointer">
              {link}
            </li>
          ))}
        </ul>
      </div>

      {/* 3️⃣ DISCLAIMER */}
      <div className="w-full bg-[#262626] py-6">
        <p className=" text-[12px] mx-auto h-[33px] text-start max-w-[1200px] text-[11px] text-white leading-relaxed">
          Disclaimer: Magicbricks Realty Services Limited is only an intermediary offering its platform to advertise properties of Seller for a Customer/Buyer/User coming on its Website and is not and cannot be a
          party to or privy to or control in any manner any transactions between the Seller and the Customer/Buyer/User. All the offers and discounts on this Website have been extended by<span className="underline cursor-pointer text-[#606060]"> Read more</span>
        </p>
      </div>

      {/* 4️⃣ COPYRIGHT  */}
      <div className="w-full h-[40px] bg-[#000000] py-4 text-center">
        <p className="text-[10px] text-white  ">
         All trademarks, logos and names are properties of their respective owners. All Rights Reserved. © Copyright 2025 Mhada Estate.
        </p>
      </div>

      {/* HELP BOT */}
      <div className="fixed bottom-6 right-6 flex items-center bg-[#f17128] 
                border-2 border-white text-white 
                px-5 py-2.5 rounded-full shadow-lg 
                cursor-pointer hover:scale-105 transition">
  <img src="/chatbox.png" className="w-[24px] h-[24px] mr-2" />
  <span className="font-bold text-sm">Help Bot</span>
</div>


    </footer>
  );
};

export default Footer;
