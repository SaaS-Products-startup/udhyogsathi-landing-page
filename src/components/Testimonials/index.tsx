"use client";
import React from "react";
import { Images } from "@/resources/images";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto flex flex-col justify-center items-center gap-12 px-4 py-12">
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
            Testimonials
          </div>
        </div>
        <div className="w-full flex flex-col justify-start items-center gap-4">
          <h1 className="w-full text-center text-black text-[40px] font-semibold font-['Onest'] leading-[48px]">
            Trusted by Businesses, Loved by Users
          </h1>
          <p className="w-full text-center text-[#5d606e] text-base font-normal font-['Onest'] leading-tight">
            See how our SaaS solution is transforming B2B e-commerce for
            companies like yours.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="w-full max-w-[380px] flex flex-col justify-start items-start gap-6 p-6 bg-[#f6f6f7] rounded-3xl outline-1 outline-[#ecedf8]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 relative rounded-full overflow-hidden">
              <Image
                src={Images.ProfilePic}
                alt="John Doe"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <div className="flex-1 flex justify-between items-center">
              <div className="text-black text-base font-medium font-['Onest'] leading-tight">
                John Doe
              </div>
              <div className="text-[#9093a1] ml-5 text-sm font-normal font-['Onest'] leading-tight">
                February 24, 2025
              </div>
            </div>
          </div>
          <p className="text-[#5d606e] text-base font-normal font-['Onest'] leading-tight">
            This platform has completely transformed how we manage bulk orders.
            The real-time tracking and instant invoicing make everything so
            smooth!
          </p>
        </div>
        <div className="w-full max-w-[380px] flex flex-col justify-start items-start gap-6 p-6 bg-[#f6f6f7] rounded-3xl outline-1 outline-[#ecedf8]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 relative rounded-full overflow-hidden">
              <Image
                src={Images.ProfilePic}
                alt="John Doe"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <div className="flex-1 flex justify-between items-center">
              <div className="text-black text-base font-medium font-['Onest'] leading-tight">
                John Doe
              </div>
              <div className="text-[#9093a1] ml-5 text-sm font-normal font-['Onest'] leading-tight">
                February 24, 2025
              </div>
            </div>
          </div>
          <p className="text-[#5d606e] text-base font-normal font-['Onest'] leading-tight">
            This platform has completely transformed how we manage bulk orders.
            The real-time tracking and instant invoicing make everything so
            smooth!
          </p>
        </div>
        <div className="w-full max-w-[380px] flex flex-col justify-start items-start gap-6 p-6 bg-[#f6f6f7] rounded-3xl outline-1 outline-[#ecedf8]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 relative rounded-full overflow-hidden">
              <Image
                src={Images.ProfilePic}
                alt="John Doe"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <div className="flex-1 flex justify-between items-center">
              <div className="text-black text-base font-medium font-['Onest'] leading-tight">
                John Doe
              </div>
              <div className="text-[#9093a1] ml-5 text-sm font-normal font-['Onest'] leading-tight">
                February 24, 2025
              </div>
            </div>
          </div>
          <p className="text-[#5d606e] text-base font-normal font-['Onest'] leading-tight">
            This platform has completely transformed how we manage bulk orders.
            The real-time tracking and instant invoicing make everything so
            smooth!
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4">
        <div className="text-black text-4xl font-semibold font-['Onest'] leading-[52px]">
          1k+
        </div>
        <div className="text-[#5d606e] text-base font-normal font-['Onest'] leading-tight">
          Trusted users
        </div>
      </div>
    </div>
  );
};

export { Testimonials };
