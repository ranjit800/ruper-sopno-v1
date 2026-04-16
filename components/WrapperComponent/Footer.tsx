import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from "@/public/accests/images/Logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#36170E] py-16 md:py-24 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-20">
        
        {/* Left Side: Logo */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
          <Link href="/" className="inline-block hover:opacity-90 transition-opacity">
            <Image 
              src={logo} 
              alt="Ruper Sopno Vastra" 
              className="w-[280px] md:w-[350px] max-w-full h-auto object-contain"
            />
          </Link>
        </div>

        {/* Right Side: Links & Contact Grid */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-left">
          
          {/* Column 1: Links Collection */}
          <div className="flex flex-col space-y-5 md:space-y-6">
            {[
              "New Arrivals",
              "About",
              "Kurti",
              "Salwar Suit",
              "Saree",
              "Night Gown",
              "Home Essentials"
            ].map((text, idx) => (
              <Link 
                key={idx} 
                href="#" 
                className="text-[#CDA277] hover:text-white transition-colors duration-300 font-light tracking-[0.08em] font-['Acumin_Variable_Concept',sans-serif]"
              >
                {text}
              </Link>
            ))}
          </div>

          {/* Column 2: Contact Info */}
          <div className="flex flex-col space-y-6 md:space-y-8">
            <h3 className="text-[#CDA277] text-lg tracking-[0.08em] font-['Acumin_Variable_Concept',sans-serif]">
              Contact
            </h3>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-3">
                <svg className="w-[1.125rem] h-[1.125rem] mt-1 shrink-0 text-[#CDA277]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <p className="text-[#CDA277] font-light tracking-[0.05em] leading-loose text-[0.95rem] font-['Acumin_Variable_Concept',sans-serif]">
                  3517 W. Gray St. Utica, <br /> Pennsylvania 57867
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <svg className="w-[1.125rem] h-[1.125rem] shrink-0 text-[#CDA277]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:info@instax.com" className="text-[#CDA277] tracking-[0.05em] hover:text-white transition-colors duration-300 font-light text-[0.95rem] font-['Acumin_Variable_Concept',sans-serif]">
                  info@instax.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <svg className="w-[1.125rem] h-[1.125rem] shrink-0 text-[#CDA277]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.864-1.051l-3.21-.535a1.125 1.125 0 00-1.25.508l-1.086 1.63A16.942 16.942 0 014.242 8.356l1.63-1.086c.39-.26.568-.744.508-1.25l-.535-3.21C5.76 2.301 5.31 1.95 4.794 1.95H3.375A1.125 1.125 0 002.25 3.075v3.675z" />
                </svg>
                <a href="tel:2195550114" className="text-[#CDA277] tracking-[0.05em] hover:text-white transition-colors duration-300 font-light text-[0.95rem] font-['Acumin_Variable_Concept',sans-serif]">
                  (219) 555-0114
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Follow Us */}
          <div className="flex flex-col space-y-6 md:space-y-8">
            <h3 className="text-[#CDA277] text-lg tracking-[0.08em] font-['Acumin_Variable_Concept',sans-serif]">
              Follow Us
            </h3>
            <div className="flex items-center gap-5">
              {/* Instagram */}
              <a href="#" className="text-[#CDA277] hover:text-white hover:-translate-y-1 transition-all duration-300">
                <svg className="w-[1.25rem] h-[1.25rem]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="1.5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="1.5"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round"></line>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" className="text-[#CDA277] hover:text-white hover:-translate-y-1 transition-all duration-300">
                <svg className="w-[1.25rem] h-[1.25rem]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" strokeWidth="1.5"></path>
                </svg>
              </a>
              {/* WhatsApp */}
              <a href="#" className="text-[#CDA277] hover:text-white hover:-translate-y-1 transition-all duration-300">
                <svg className="w-[1.25rem] h-[1.25rem]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
