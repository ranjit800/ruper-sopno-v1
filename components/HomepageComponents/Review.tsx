"use client";

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import ReviewImg from '@/public/accests/images/ReviewImg.png';

const reviewsData = [
  {
    text: "The best one-stop shop in Kolkata for high-quality sarees and bedsheets at unbeatable prices.",
    name: "Mousumi Sen",
    stars: 4
  },
  {
    text: "I love that they can source specific designs just for me—the quality is always consistent.",
    name: "Riya Banerjee",
    stars: 4
  },
  {
    text: "From elegant kurtis to comfortable night gowns, the fabric quality here is simply superior.",
    name: "Debolina Ghosh",
    stars: 4
  },
  {
    text: "Amazing customer service and the most stunning collection of traditional and modern wear.",
    name: "Anjali Dubey",
    stars: 5
  }
];

const Review = () => {
  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden bg-[#612411]">
      {/* Background Image Texture (from your previous code stub) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0 mix-blend-overlay">
        <Image 
          src={ReviewImg}
          alt="Texture Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-center">
        
        {/* Title */}
        <h2 className="text-[#DEAF79] text-3xl md:text-4xl tracking-[0.25em] font-normal mb-16 uppercase font-['Acumin_Variable_Concept',sans-serif]">
          Client Love
        </h2>

        {/* Swiper Slider */}
        <div className="w-full">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
            loop={true}
            className="w-full pb-16"
          >
            {reviewsData.map((review, i) => (
              <SwiperSlide key={i} className="h-auto">
                <div className="h-full w-full bg-[#38160B] rounded-none px-8 py-12 md:px-10 md:py-14 flex flex-col items-center text-center transition-transform duration-500 hover:-translate-y-2 border border-transparent hover:border-[#DEAF79]/20 shadow-2xl">
                  
                  {/* Stars */}
                  <div className="flex gap-2.5 mb-10">
                    {[...Array(review.stars)].map((_, index) => (
                      <svg key={index} className="w-[1.4rem] h-[1.4rem] text-[#DEAF79] fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-[#DEAF79]/90 font-light text-base md:text-[1.05rem] leading-[1.8] mb-12 font-['Acumin_Variable_Concept',sans-serif] tracking-[0.03em] flex-grow">
                    {review.text}
                  </p>

                  {/* Reviewer Name */}
                  <h4 className="text-[#DEAF79] font-medium tracking-[0.1em] uppercase text-sm mt-auto font-['Acumin_Variable_Concept',sans-serif]">
                    {review.name}
                  </h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
      
      {/* Custom Global Swiper Styles injected directly for clean bullet pagination */}
      <style dangerouslySetInnerHTML={{__html: `
        .swiper-pagination-bullet { background-color: #DEAF79; opacity: 0.3; width: 10px; height: 10px; transition: all 0.3s; }
        .swiper-pagination-bullet-active { opacity: 1; transform: scale(1.2); }
      `}} />
    </section>
  )
}

export default Review;