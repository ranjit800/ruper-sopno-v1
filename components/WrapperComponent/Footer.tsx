import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/accests/images/RsvLogoFix.svg";
import { MapPin, Mail, Phone } from "lucide-react";

import insta from "@/public/accests/images/InstaLogo.png";
import face from "@/public/accests/images/FacebookLogo.png";
import whats from "@/public/accests/images/WhatsappLogo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#451406] py-16 md:py-24 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-20">
        {/* Left Side: Logo */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
          <Link href="/" className="inline-block hover:opacity-90 transition-opacity">
            <Image src={logo} alt="Ruper Sopno Vastra" className="w-[280px] md:w-[350px] max-w-full h-auto object-contain" />
          </Link>
        </div>

        {/* Right Side: Links & Contact Grid */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-left">
          {/* Column 1: Links Collection */}
          <div className="flex flex-col space-y-4 md:space-y-5">
            {[
              { name: "Home", href: "/" },
              { name: "All Products", href: "/all-product" },
              { name: "New Arrivals", href: "/new-arrivals" },
              { name: "Sarees", href: "/sarees" },
              { name: "Kurti", href: "/kurti" },
              { name: "Salwar Suit", href: "/salwar-suit" },
              { name: "Night Gown", href: "/night-gown" },
              { name: "Home Essentials", href: "/home-essentials" },
              { name: "About Us", href: "/about-us" },
              { name: "Contact Us", href: "/contact-us" },
            ].map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="text-[#CDA277] hover:text-white transition-colors duration-300 font-light tracking-[0.08em]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Column 2: Contact Info */}
          <div className="flex flex-col space-y-6 md:space-y-8">
            <h3 className="text-[#CDA277] text-lg tracking-[0.08em] font-['Brygada_1918']">Contact</h3>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-[1.125rem] h-[1.125rem] mt-1 shrink-0 text-[#CDA277]" />
                <p className="text-[#CDA277] font-light tracking-[0.05em] leading-loose text-[0.95rem]">
                  177 Roynagar Place, <br /> kol - 700070
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-[1.125rem] h-[1.125rem] shrink-0 text-[#CDA277]" />
                <a
                  href="mailto:rupasree184@gmail.com"
                  className="text-[#CDA277] tracking-[0.05em] hover:text-white transition-colors duration-300 font-light text-[0.95rem]"
                >
                  rupasree184@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="w-[1.125rem] h-[1.125rem] shrink-0 text-[#CDA277]" />
                <a
                  href="tel:+918282981727"
                  className="text-[#CDA277] tracking-[0.05em] hover:text-white transition-colors duration-300 font-light text-[0.95rem]"
                >
                  +91 8282 9817 27
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Follow Us */}
          <div className="flex flex-col space-y-6 md:space-y-8">
            <h3 className="text-[#CDA277] text-lg tracking-[0.08em] font-['Brygada_1918']">Follow Us</h3>
            <div className="flex items-center gap-5">
              {/* Instagram */}
              <a href="https://www.instagram.com/ruper.sopno.vastra" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-all duration-300 relative w-[1.25rem] h-[1.25rem]">
                <Image src={insta} alt="Instagram" fill className="object-contain" />
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/search/top?q=Ruper%20Sopno%20Vastra" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-all duration-300 relative w-[1.25rem] h-[1.25rem]">
                <Image src={face} alt="Facebook" fill className="object-contain" />
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/918282981727" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-all duration-300 relative w-[1.25rem] h-[1.25rem]">
                <Image src={whats} alt="WhatsApp" fill className="object-contain" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
