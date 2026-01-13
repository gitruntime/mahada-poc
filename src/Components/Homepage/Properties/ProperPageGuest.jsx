import React from "react";
import PropertyCardGuest from "./PropertyCardGuest";
import { Poppins } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const properties = [
  { id: 1, title: "Modern 2BHK in Andheri West", location: "Andheri West, Near DN Nagar Metro", bhk: "2BHK", floor: "5th Floor", amenities: ["Wi-Fi", "Parking", "Gym", "Security"], price: 35000, deposit: 100000, rating: 4.5, reviews: 23, image: "/room1.png", verified: true, bhkTag: "2BHK" },
  { id: 2, title: "Cozy 1BHK in Koregaon Park", location: "Koregaon Park, Lane 7", bhk: "1BHK", floor: "2nd Floor", amenities: ["Wi-Fi", "Security", "Garden", "Water Supply 24x7"], price: 18000, deposit: 50000, rating: 4.2, reviews: 15, image: "/room2.png", verified: true, bhkTag: "1BHK" },
  { id: 3, title: "Spacious 3BHK in Baner", location: "Baner, Near Symbiosis College", bhk: "3BHK", floor: "8th Floor", amenities: ["Wi-Fi", "Parking", "Gym", "Swimming Pool"], price: 45000, deposit: 150000, rating: 4.8, reviews: 42, image: "/room3.png", verified: true, bhkTag: "3BHK" },
  { id: 4, title: "Modern 2BHK in Andheri West", location: "Andheri West, Near DN Nagar Metro", bhk: "2BHK", floor: "5th Floor", amenities: ["Wi-Fi", "Parking", "Gym", "Security"], price: 35000, deposit: 100000, rating: 4.5, reviews: 23, image: "/room2.png", verified: true, bhkTag: "2BHK" },
  { id: 5, title: "Cozy 1BHK in Koregaon Park", location: "Koregaon Park, Lane 7", bhk: "1BHK", floor: "2nd Floor", amenities: ["Wi-Fi", "Security", "Garden", "Water Supply 24x7"], price: 18000, deposit: 50000, rating: 4.2, reviews: 15, image: "/room1.png", verified: true, bhkTag: "1BHK" },
  { id: 6, title: "Spacious 3BHK in Baner", location: "Baner, Near Symbiosis College", bhk: "3BHK", floor: "8th Floor", amenities: ["Wi-Fi", "Parking", "Gym", "Swimming Pool"], price: 45000, deposit: 150000, rating: 4.8, reviews: 42, image: "/room3.png", verified: true, bhkTag: "3BHK" },
  { id: 7, title: "Spacious 3BHK in Baner", location: "Baner, Near Symbiosis College", bhk: "3BHK", floor: "8th Floor", amenities: ["Wi-Fi", "Parking", "Gym", "Swimming Pool"], price: 45000, deposit: 150000, rating: 4.8, reviews: 42, image: "/room3.png", verified: true, bhkTag: "3BHK" },
  { id: 8, title: "Modern 2BHK in Andheri West", location: "Andheri West, Near DN Nagar Metro", bhk: "2BHK", floor: "5th Floor", amenities: ["Wi-Fi", "Parking", "Gym", "Security"], price: 35000, deposit: 100000, rating: 4.5, reviews: 23, image: "/room2.png", verified: true, bhkTag: "2BHK" },
  { id: 9, title: "Cozy 1BHK in Koregaon Park", location: "Koregaon Park, Lane 7", bhk: "1BHK", floor: "2nd Floor", amenities: ["Wi-Fi", "Security", "Garden", "Water Supply 24x7"], price: 18000, deposit: 50000, rating: 4.2, reviews: 15, image: "/room1.png", verified: true, bhkTag: "1BHK" },
   { id: 10, title: "Cozy 1BHK in Koregaon Park", location: "Koregaon Park, Lane 7", bhk: "1BHK", floor: "2nd Floor", amenities: ["Wi-Fi", "Security", "Garden", "Water Supply 24x7"], price: 18000, deposit: 50000, rating: 4.2, reviews: 15, image: "/room1.png", verified: true, bhkTag: "1BHK" },

];

const ProperPageGuest = () => {
  return (
    <div className="mt-[60px]">
      {/* Header */}
      <div className="max-w-[1380px] mx-auto px-[40px] flex items-center justify-between mb-6">
        <div>
          <h1 className={`text-[32px] ${poppins.className} font-semibold text-gray-900`}>
            Properties for rent in <span className="text-[#028541]">Andheri</span>
          </h1>
          <p className={`text-gray-500 ${poppins.className} text-[16px] mt-1`}>
            {properties.length} properties found
          </p>
        </div>
        <a href="/allpropertyguest" className={`text-gray-900 ${poppins.className} flex items-center gap-1`}>
          <span className="text-[14px] font-medium">View All</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* Swiper */}
      <div className="max-w-[1400px] mx-auto px-[0px] mb-[30px]">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={3}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{ clickable: true }}
          loop
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="relative"
        >
          {properties.map((property) => (
            <SwiperSlide key={property.id}>
              <PropertyCardGuest property={property} className="hover:scale-105 transition-transform duration-300" />
            </SwiperSlide>
          ))}

          {/* Custom Navigation */}
          <div className="swiper-button-next-custom mr-[18px] absolute top-1/2 -right-4 transform -translate-y-1/2 bg-gray-300 shadow-lg rounded-full p-2 cursor-pointer hover:bg-gray-100 z-10">
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <div className="swiper-button-prev-custom ml-[18px] absolute top-1/2 -left-4 transform -translate-y-1/2 bg-gray-300 shadow-lg rounded-full p-2 cursor-pointer hover:bg-gray-100 z-10">
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default ProperPageGuest;
