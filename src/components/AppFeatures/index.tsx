"use client";
import React from "react";
import { Images } from "@/resources/images";
import Image from "next/image";

const AppFeatures = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto mt-70 flex flex-col lg:flex-row justify-between items-start gap-12 px-4 pt-24 pb-12">
      <div className="w-full lg:w-1/2 flex flex-col justify-start items-start gap-[60px]">
        <div className="w-full flex flex-col justify-start items-start gap-6">
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
              App Key Features
            </div>
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-4">
            <h1 className="w-full text-black text-[40px] font-semibold font-['Onest'] leading-[48px]">
              Seamless Ordering Experience for Your Customers
            </h1>
            <p className="w-full text-[#5d606e] text-base font-normal font-['Onest'] leading-tight">
              Effortless ordering, tracking, and invoicing—all in one app.
            </p>
          </div>
        </div>

        <div className="w-full grid grid-cols-2 gap-11">
          <div className="w-full flex flex-col justify-start items-start gap-3">
            <div className="w-10 h-10 bg-[#4254bc] rounded-full flex justify-center items-center">
              <div className="w-5 h-5 relative overflow-hidden">
                <Image
                  src={Images.OrderIC}
                  alt="Udhyog Sathi"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-2">
              <h2 className="w-full text-black text-2xl font-medium font-['Onest'] leading-[30px]">
                Create Orders Easily
              </h2>
              <p className="w-full text-[#9093a1] text-base font-normal font-['Onest'] leading-[18px]">
                Browse products and place bulk orders in just a few taps.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-3">
            <div className="w-10 h-10 bg-[#4254bc] rounded-full flex justify-center items-center">
              <div className="w-5 h-5 relative overflow-hidden">
                <Image
                  src={Images.HistoryIc}
                  alt="Udhyog Sathi"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-2">
              <h2 className="w-full text-black text-2xl font-medium font-['Onest'] leading-[30px]">
                Order History
              </h2>
              <p className="w-full text-[#9093a1] text-base font-normal font-['Onest'] leading-[18px]">
                Track past orders with real-time status updates and easy
                reordering options.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-3">
            <div className="w-10 h-10 bg-[#4254bc] rounded-full flex justify-center items-center">
              <div className="w-5 h-5 relative overflow-hidden">
                <Image
                  src={Images.StatementIc}
                  alt="Udhyog Sathi"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-2">
              <h2 className="w-full text-black text-2xl font-medium font-['Onest'] leading-[30px]">
                Fetch Statements Instantly
              </h2>
              <p className="w-full text-[#9093a1] text-base font-normal font-['Onest'] leading-[18px]">
                View and download invoices and transaction statements anytime.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-3">
            <div className="w-10 h-10 bg-[#4254bc] rounded-full flex justify-center items-center">
              <div className="w-5 h-5 relative overflow-hidden">
                <Image
                  src={Images.ThemeIc}
                  alt="Udhyog Sathi"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-2">
              <h2 className="w-full text-black text-2xl font-medium font-['Onest'] leading-[30px]">
                Light & Dark Mode
              </h2>
              <p className="w-full text-[#9093a1] text-base font-normal font-['Onest'] leading-[18px]">
                Enjoy a seamless experience with both light and dark themes for
                better visibility and comfort.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
        <div className="w-[461px] h-[642px] bg-gradient-to-b from-white/0 to-white absolute top-0 left-0 z-0" />
        <Image
          src={Images.PhoneFeatures}
          alt="Phone Mockup"
          width={461}
          height={642}
          style={{ objectFit: "contain" }}
          priority
          className="relative z-10"
        />
      </div>
    </div>
  );
};

export { AppFeatures };
