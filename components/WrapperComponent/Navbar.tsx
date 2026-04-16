"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/public/accests/images/Logo.png";
import SecondLogo from "@/public/accests/images/secondLogo.png";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { 
      name: "Shop", 
      href: "#",
      subLinks: [
        { name: "All Products", href: "/all-product" },
        { name: "New Arrivals", href: "/new-arrivals" },
      ]
    },
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  let bgClass = "bg-[#E5DCCF]";
  let logoSrc = SecondLogo;
  let textClass = "text-[#6E2814]";
  let hoverClass = "group-hover:text-[#49251A] hover:text-[#49251A]";
  let lineClass = "bg-[#6E2814] group-hover:bg-[#49251A]";
  let menuIconClass = "text-[#6E2814]";

  if (pathname === "/") {
    bgClass = "bg-[#49251A]";
    logoSrc = Logo;
    textClass = "text-[#E2B06F]";
    hoverClass = "group-hover:text-white hover:text-white";
    lineClass = "bg-[#E2B06F] group-hover:bg-white";
    menuIconClass = "text-[#E2B06F]";
  } else if (pathname === "/all-product") {
    bgClass = "bg-[#6E2814]";
    logoSrc = Logo;
    textClass = "text-[#E2B06F]";
    hoverClass = "group-hover:text-white hover:text-white";
    lineClass = "bg-[#E2B06F] group-hover:bg-white";
    menuIconClass = "text-[#E2B06F]";
  }

  return (
    <nav className={`w-full z-50 h-[140px] flex items-center transition-colors duration-300 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center w-full">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={logoSrc}
                alt="Ruper Sopno Vastra Logo"
                width={250}
                height={60}
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.subLinks ? (
                  <div className={`relative ${textClass} text-lg font-medium transition-colors duration-300 ${hoverClass} pb-2 flex items-center cursor-default`}>
                    {link.name}
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${lineClass} transition-all duration-300 group-hover:w-full`}></span>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`relative ${textClass} text-lg font-medium transition-colors duration-300 ${hoverClass} pb-2 flex items-center`}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${lineClass} transition-all duration-300 group-hover:w-full`}></span>
                  </Link>
                )}

                {/* Dropdown Menu */}
                {link.subLinks && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[180px] bg-[#E3DAC9] rounded-2xl py-6 px-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-xl z-50">
                    <ul className="flex flex-col space-y-6 items-center">
                      {link.subLinks.map((sub) => (
                        <li key={sub.name}>
                          <Link 
                            href={sub.href} 
                            className="text-[#4B2418] text-lg font-medium tracking-wide relative group/sub pb-1 inline-block"
                          >
                            {sub.name}
                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#4B2418] transition-all duration-300 group-hover/sub:w-full"></span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${menuIconClass} hover:opacity-80 focus:outline-none transition-colors`}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 absolute top-[140px] left-0 w-full z-40 ${
          isMobileMenuOpen ? `max-h-[500px] ${bgClass === "bg-[#E5DCCF]" ? "bg-[#E5DCCF]/95" : "bg-[#4B2418]/95"} backdrop-blur-md border-t border-black/10` : "max-h-0"
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.subLinks ? (
                <>
                  <div className={`block ${textClass} text-xl font-medium py-3 border-b border-black/10 cursor-default`}>
                    {link.name}
                  </div>
                  <div className="pl-6 pb-2 space-y-4 pt-4 border-b border-black/10">
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className={`block ${textClass} opacity-80 ${hoverClass} text-lg font-medium`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  className={`block ${textClass} ${hoverClass} text-xl font-medium py-3 border-b border-black/10 last:border-0`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;