"use client";
import React from "react";
import { Images } from "@/resources/images";
import Image from "next/image";
import { useEffect } from "react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
    <div className="w-full max-w-[1286px] mb-5 mx-auto p-11 bg-[#ecedf8] rounded-[32px] flex flex-col md:flex-row justify-start items-start gap-6">
      <div className="w-full md:w-[364px] flex flex-col justify-start items-start gap-4">
        <div className="w-[172.39px] h-[42px] relative">
          <Image
            src={Images.Logo}
            alt="Udhyog Sathi Logo"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
        <div className="w-full text-[#2e3037] text-base font-normal font-['Onest'] leading-normal">
          All-in-One B2B SaaS Solution for Smarter Order & Business Management.
        </div>
      </div>
      <div className="w-full md:w-[170px] flex flex-col justify-start items-start gap-5">
        <div className="w-full text-black text-2xl font-medium font-['Inter'] leading-[34px]">
          Useful Link
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-3">
          <a
            onClick={() => scrollToSection("home")}
            className="w-full text-[#2e3037] text-xl font-normal font-['Inter'] leading-7 hover:text-[#4254bc] transition-colors cursor-pointer"
          >
            Home
          </a>
          <a
            onClick={() => scrollToSection("features")}
            className="w-full text-[#2e3037] text-xl font-normal font-['Inter'] leading-7 hover:text-[#4254bc] transition-colors cursor-pointer"
          >
            Features
          </a>
          <a
            onClick={() => scrollToSection("testimonials")}
            className="w-full text-[#2e3037] text-xl font-normal font-['Inter'] leading-7 hover:text-[#4254bc] transition-colors cursor-pointer"
          >
            Testimonials
          </a>
          <a
            onClick={() => scrollToSection("pricing")}
            className="w-full text-[#2e3037] text-xl font-normal font-['Inter'] leading-7 hover:text-[#4254bc] transition-colors cursor-pointer"
          >
            Pricing
          </a>
          <a
            onClick={() => scrollToSection("faqs")}
            className="w-full text-[#2e3037] text-xl font-normal font-['Inter'] leading-7 hover:text-[#4254bc] transition-colors cursor-pointer"
          >
            FAQs
          </a>
        </div>
      </div>
      <div className="w-full md:w-[170px] flex flex-col justify-start items-start gap-5">
        <div className="w-full text-black text-2xl font-medium font-['Inter'] leading-[34px]">
          Follow Us
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-3">
          <a
            href="https://www.instagram.com/udhyogsathi/"
            target="_blank"
            className="w-full text-[#2e3037] text-xl font-normal font-['Inter'] leading-7 hover:text-[#4254bc] transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/share/191ZAEtZXy/?mibextid=wwXIfr"
            target="_blank"
            className="w-full text-[#2e3037] text-xl font-normal font-['Inter'] leading-7 hover:text-[#4254bc] transition-colors"
          >
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/company/udhyog-sathi"
            target="_blank"
            className="w-full text-[#2e3037] text-xl font-normal font-['Inter'] leading-7 hover:text-[#4254bc] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="w-full md:w-[364px] flex flex-col justify-start items-start gap-[21px]">
        <div className="w-full text-black text-2xl font-medium font-['Inter'] leading-[34px]">
          Subscribe To Our Newsletter
        </div>
        <div className="w-full pl-6 pr-2 py-2 rounded-[90px] outline-1 outline-[#b3bae4] flex justify-between items-center">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 bg-transparent text-[#b3bae4] text-base font-normal font-['Onest'] leading-normal outline-none"
          />
          <button className="px-4 py-[15px] bg-[#4254bc] rounded-[80px] flex justify-center items-center gap-2">
            <div className="text-[#fcfcfc] text-base font-medium font-['Onest'] leading-normal">
              Subscribe
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export { Footer };
