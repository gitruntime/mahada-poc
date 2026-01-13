import React from 'react'
import HeroNavbarGuest from './HeroNavbar/HeroNavbarGuest'
import HeroContent from './HeroNavbar/HeroContent'
import HeroSearch from './HeroNavbar/HeroSearch'

const HeroGuest = () => {
  return (
    <section className="relative w-full h-[700px] overflow-hidden text-white">

      {/* 🔹 Background Video */}
      <div className='overlay'>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover "
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/Mhada.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 🔹 Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* 🔹 Content */}
      <div className="relative z-10">
        <HeroNavbarGuest />

        <HeroContent />
        <div className="-mt-[150px]">
          <HeroSearch />

        </div>



      </div>

    </section>
  )
}

export default HeroGuest
