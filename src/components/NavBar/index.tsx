"use client";
import { Images } from "@/resources/images";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    }
  }, []);

  return (
    <header className="w-full px-4 sm:px-8 md:px-16 lg:px-28 py-6 bg-white shadow-[0px_4px_8px_0px_rgba(0,0,0,0.02)] flex justify-between items-center relative top-0 z-50">
      <div className="relative h-[42px] w-[120px] sm:w-[150px] md:w-[172px]">
        <Image
          src={Images.Logo}
          alt="Udhyog Sathi"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>

      <nav className="hidden lg:flex justify-center items-center gap-6 xl:gap-10">
        <button
          onClick={() => scrollToSection("home")}
          className="text-black text-sm font-normal font-['Onest'] leading-[18px] hover:text-[#4254bc] transition-colors cursor-pointer"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("features")}
          className="text-black text-sm font-normal font-['Onest'] leading-[18px] hover:text-[#4254bc] transition-colors cursor-pointer"
        >
          Features
        </button>
        <button
          onClick={() => scrollToSection("testimonials")}
          className="text-black text-sm font-normal font-['Onest'] leading-[18px] hover:text-[#4254bc] transition-colors cursor-pointer"
        >
          Testimonials
        </button>
        <button
          onClick={() => scrollToSection("pricing")}
          className="text-black text-sm font-normal font-['Onest'] leading-[18px] hover:text-[#4254bc] transition-colors cursor-pointer"
        >
          Pricing
        </button>
        <button
          onClick={() => scrollToSection("faqs")}
          className="text-black text-sm font-normal font-['Onest'] leading-[18px] hover:text-[#4254bc] transition-colors cursor-pointer"
        >
          FAQs
        </button>
      </nav>

      <div className="hidden lg:flex">
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLScZRAIF7SyMvj-bwf1rYzXPC2Ee3mJ52NiUHLajuLKZZnH4xg/viewform?usp=header"
          target="_blank"
        >
          <button className="px-4 py-3 bg-[#4254bc] rounded-xl flex justify-center items-center gap-2 hover:bg-[#3340a3] transition-colors">
            <span className="text-[#fcfcfc] text-sm font-medium font-['Onest'] leading-[18px]">
              Register
            </span>
          </button>
        </Link>
      </div>

      <button
        className="lg:hidden flex items-center justify-center p-2"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <svg
          className="w-6 h-6 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {isMenuOpen && (
        <nav className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 z-10">
          <button
            onClick={() => scrollToSection("home")}
            className="text-black text-base font-normal font-['Onest'] leading-[20px] hover:text-[#4254bc] transition-colors cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className="text-black text-base font-normal font-['Onest'] leading-[20px] hover:text-[#4254bc] transition-colors cursor-pointer"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-black text-base font-normal font-['Onest'] leading-[20px] hover:text-[#4254bc] transition-colors cursor-pointer"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-black text-base font-normal font-['Onest'] leading-[20px] hover:text-[#4254bc] transition-colors cursor-pointer"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection("faqs")}
            className="text-black text-base font-normal font-['Onest'] leading-[20px] hover:text-[#4254bc] transition-colors cursor-pointer"
          >
            FAQs
          </button>
          <Link href="/signup">
            <button className="px-4 py-3 bg-[#4254bc] rounded-xl flex justify-center items-center gap-2 hover:bg-[#3340a3] transition-colors">
              <span className="text-[#fcfcfc] text-base font-medium font-['Onest'] leading-[20px]">
                Sign up
              </span>
            </button>
          </Link>
        </nav>
      )}
    </header>
  );
};

export { Navbar };
