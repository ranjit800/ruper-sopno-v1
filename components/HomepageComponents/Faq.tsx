'use client';

import React, { useState } from 'react';

const faqData = [
  {
    question: "What products do you offer at your shop?",
    answer: "We offer a wide variety of premium sarees, elegant kurtis, stunning salwar suits, and cozy home essentials hand-picked directly from Kolkata's finest wholesale markets."
  },
  {
    question: "What products do you offer at your shop?",
    answer: "Our collections are regularly updated with new arrivals straight from the weavers to give you the most authentic fabrics at the best prices."
  },
  {
    question: "What products do you offer at your shop?",
    answer: "You can find an exclusive variety of nightgowns, hand-woven cotton sarees, traditional silks, and designer kurtis, all in one place."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full bg-[#E8DFD3] py-20 md:py-28 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto flex flex-col items-center">
        
        {/* Heading */}
        <h2 className="text-[#6C2513] text-3xl md:text-5xl tracking-[0.15em] mb-12 font-['Acumin_Variable_Concept',sans-serif]">
          FAQ
        </h2>

        {/* Orange Wrapper */}
        <div className="w-full max-w-6xl bg-[#DFAD69] rounded-[1.5rem] p-6 md:p-10 lg:p-14 flex flex-col space-y-6 shadow-sm">
          
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="w-full bg-[#DFDCD9] rounded-xl overflow-hidden transition-all duration-300 shadow-sm"
              >
                {/* Question Row */}
                <button 
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between px-6 md:px-8 py-5 text-left focus:outline-none"
                >
                  <span className="text-[#6C2513] text-lg md:text-xl font-light tracking-wide font-['Acumin_Variable_Concept',sans-serif]">
                    {faq.question}
                  </span>
                  
                  {/* Circle Chevron Icon */}
                  <div className="flex-shrink-0 ml-4 w-8 h-8 md:w-9 md:h-9 bg-[#C9C4C0] rounded-full flex items-center justify-center transition-transform duration-300">
                    <svg 
                      className={`w-5 h-5 text-[#6C2513] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </button>

                {/* Dropdown Answer */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 md:px-8 pb-6 text-[#6C2513]/80 font-light text-base md:text-lg leading-relaxed font-['Acumin_Variable_Concept',sans-serif]">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          
        </div>

      </div>
    </section>
  );
};

export default Faq;