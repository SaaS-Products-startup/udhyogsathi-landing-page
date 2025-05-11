"use client";
import { Images } from "@/resources/images";
import Image from "next/image";

const HomeSection = () => {
  return (
    <div className="w-full mx-auto relative bg-white pb-24">
      <div className="w-full max-w-[1286px] h-180 mx-auto rounded-bl-[32px] rounded-br-[32px] bg-[radial-gradient(ellipse_100%_99.07%_at_50%_0%,_white_51%,_#9AA9FE_100%)] overflow-hidden pb-16 relative z-10">
        <div className="w-full max-w-[946px] mx-auto px-4 sm:px-6 md:px-8 pt-12 sm:pt-16 md:pt-20 flex flex-col justify-center items-center gap-6 sm:gap-8">
          <div className="px-4 py-2 rounded-[58px] outline-1 outline-offset-[-1px] outline-[#c7c9d0] inline-flex justify-start items-center gap-2">
            <div className="w-6 h-6 relative overflow-hidden">
              <Image
                src={Images.ThunderIc}
                alt="Udhyog Sathi"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
            <div className="text-center text-[#4254bc] text-sm sm:text-base font-normal font-['Onest'] leading-tight">
              Simplify Management
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 sm:gap-6">
            <h1 className="text-black text-2xl sm:text-3xl md:text-[44px] font-semibold font-['Onest'] leading-tight sm:leading-[40px] md:leading-[54px] text-center px-4">
              Power Up Your B2B E-Commerce and Supply chain Management with Our
              All-in-One SaaS Solution
            </h1>
            <p className="w-full max-w-[558px] text-[#5d606e] text-sm sm:text-base font-normal font-['Onest'] leading-tight text-center px-4">
              Manage orders, customers, and employees effortlessly with our
              all-in-one B2B SaaS platform.
            </p>
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
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-4 absolute bottom-100 left-1/2 -translate-x-1/2 z-20 top-150">
        <div className="relative w-full aspect-[16/9] max-w-[2100px] mx-auto">
          <div className="absolute w-full h-full top-0 left-0 -translate-y-[25%]">
            <Image
              src={Images.Laptop}
              alt="Laptop showing Udhyog Sathi dashboard"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>

          <div className="absolute right-[3%] top-[-100] w-[30%] h-[75%]">
            <Image
              src={Images.Phone}
              alt="Mobile showing Udhyog Sathi app"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { HomeSection };
