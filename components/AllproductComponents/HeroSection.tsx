import React from 'react';
import Image from 'next/image';
import HeroImg from '@/public/accests/images/AllProductsmainImg.png';

const HeroSection = () => {
  return (
    <section className="relative w-full h-[350px] md:h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 ">
        <Image
          src={HeroImg}
          alt="All Products Collection"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark Overlay for Text Readability */}
        {/* <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[#4B2418]/30"></div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-['Brygada_1918'] font-medium tracking-[0.25em] text-[#E5DCD3] uppercase drop-shadow-md">
          All Products
        </h1>
        <p className="text-[#E5DCD3] text-base md:text-lg lg:text-xl tracking-wider font-light drop-shadow">
          Discover our latest collections crafted for every moments
        </p>
      </div>
    </section>
  );
};

export default HeroSection;