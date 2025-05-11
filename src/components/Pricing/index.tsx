"use client";
import React from "react";
import { Images } from "@/resources/images";
import Image from "next/image";

const Pricing = () => {
  return (
    <div className="w-full max-w-[1140px] mx-auto flex flex-col justify-start items-center gap-[60px] px-4 py-12">
      <div className="w-full max-w-[655px] flex flex-col justify-center items-center gap-6">
        <div className="px-4 py-2 rounded-[58px] outline-1 outline-[#c7c9d0] inline-flex justify-start items-center gap-2">
          <div className="w-6 h-6 relative overflow-hidden">
            <Image
              src={Images.ThunderIc}
              alt="Udhyog Sathi"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
          <div className="text-center text-[#4254bc] text-base font-normal font-['Onest'] leading-tight">
            Pricing
          </div>
        </div>
        <div className="w-full flex flex-col justify-start items-center gap-4">
          <h1 className="w-full text-center text-black text-[40px] font-semibold font-['Onest'] leading-[48px]">
            We are Providing Free Access to Early Users
          </h1>
          <p className="w-full text-center text-[#5d606e] text-base font-normal font-['Onest'] leading-tight">
            Please do Register to get the early access, please click the
            register button and fill the form.
          </p>
        </div>
      </div>
      <div className="inline-flex flex-col sm:flex-row justify-center items-center gap-4 mb-6 sm:mb-10">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScZRAIF7SyMvj-bwf1rYzXPC2Ee3mJ52NiUHLajuLKZZnH4xg/viewform?usp=header"
          target="_blank"
          className="w-32 px-4 py-[15px] bg-[#4254bc] rounded-xl flex justify-center items-center gap-2 hover:bg-[#3340a3] transition-colors"
        >
          <span className="text-[#fcfcfc] text-sm font-medium font-['Onest'] leading-none">
            Register
          </span>
        </a>
        <a
          href="mailto:mail@udhyogsathi.com"
          className="w-32 px-4 py-[15px] bg-[#fbfbfd] rounded-xl outline-1 outline-offset-[-1px] outline-[#d9dcf1] flex justify-center items-center gap-2 hover:bg-[#e6e8f5] transition-colors"
        >
          <span className="text-[#0b0c0d] text-sm font-medium font-['Onest'] leading-none">
            Contact us
          </span>
        </a>
      </div>
    </div>
  );
};

export { Pricing };
