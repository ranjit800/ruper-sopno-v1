import React from "react";
import HeroSection from "@/components/HomepageComponents/HeroSection";
import About from "@/components/HomepageComponents/About";
import Faq from "@/components/HomepageComponents/Faq";
import Review from "@/components/HomepageComponents/Review";
import Bestseller from "@/components/HomepageComponents/Bestseller";
import Card from "@/components/Common/Card";

const page = () => {
  return (
    <main className="">
      <HeroSection />
      <About />
      
      <Bestseller />
      <Review />
      <Faq />
      
    </main>
  );
};

export default page;
