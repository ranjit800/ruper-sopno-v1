import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroBg from "@/public/accests/images/HeroImg_w2.webp";

const HeroSection = () => {
  return (
    <section className="w-full h-[110vh] flex  bg-[#4B2418]">
     

      {/* Bottom Image Section with Centered Content */}
      <div className="flex-1 relative w-full overflow-hidden">
        <Image
          src={HeroBg}
          alt="Luxury Fashion Hero"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Subtle Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
        {/* Centered Content inside the Image div */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <div className="space-y-8">
            <h1 className="text-white text-4xl md:text-6xl lg:text-5xl font-serif font-light tracking-[0.2em] uppercase leading-relaxed max-w-6xl">
              NEW COLLECTIONS ARE WAITING <br />
              FOR YOU
            </h1>
            
            <div className="pt-8">
              <Link href="/all-product" className="inline-block px-12 py-4 bg-[#d38d48] hover:bg-[#c47e3a] text-white text-lg md:text-xl font-serif rounded-full transition-all duration-300 shadow-xl active:scale-95">
                shop now
              </Link>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
