"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/navigation";
import Card from "@/components/Common/Card";
import "swiper/css";

// Images
import img1 from "@/public/accests/images/KurtiImgs/kurtiImg1.png";
import img2 from "@/public/accests/images/NightGownImags/nightGownImag3.png";
import img3 from "@/public/accests/images/SalwarImgs/SalwarImgs3.png";
import img4 from "@/public/accests/images/SareeImgs/img2.png";

const products = [
  { id: 1, image: img1, href: "/kurti" },
  { id: 2, image: img2, href: "/night-gown" },
  { id: 3, image: img3, href: "/salwar-suit" },
  { id: 4, image: img4, href: "/sarees" },
];

const BestsellerSwiper = () => {
  const router = useRouter();
  return (
    <div className="w-full bg-[#e9e1d5] py-16 overflow-hidden">
      {/* Title */}
      <h2 className="text-center text-3xl md:text-4xl lg:text-[42px] tracking-[5px] text-[#7a3b1c] mb-12 font-['Brygada_1918']">BESTSELLER</h2>

      <Swiper
        spaceBetween={10} // 👈 gap kam
        slidesPerView={2.9} // 👈 4th card visible
        grabCursor={true}
        centeredSlides={false}
        slidesOffsetBefore={140} // 🔥 MAIN FIX (push right)
        slidesOffsetAfter={10}
        breakpoints={{
          320: {
            slidesPerView: 1.15,
            spaceBetween: 14,
            slidesOffsetBefore: 20,
            slidesOffsetAfter: 10,
          },
          640: {
            slidesPerView: 2.2,
            spaceBetween: 18,
            slidesOffsetBefore: 40,
            slidesOffsetAfter: 10,
          },
          1024: {
            slidesPerView: 3.4,
            spaceBetween: 22,
            slidesOffsetBefore: 140, // 🔥 KEY
            slidesOffsetAfter: 10,
          },
        }}
      >
        {products.map((item, index) => (
          <SwiperSlide key={item.id}>
            <Card 
              imageSrc={item.image} 
              priority={index < 4} 
              onButtonClick={() => router.push(item.href)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BestsellerSwiper;
